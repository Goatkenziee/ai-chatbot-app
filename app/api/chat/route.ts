import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message, conversationId } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Get or create conversation
    let conversation;
    if (conversationId) {
      conversation = await prisma.conversation.findFirst({
        where: { id: conversationId, userId },
        include: { messages: { orderBy: { createdAt: "asc" } } },
      });
      if (!conversation) {
        return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
      }
    } else {
      conversation = await prisma.conversation.create({
        data: {
          title: message.slice(0, 60) + (message.length > 60 ? "..." : ""),
          userId,
        },
        include: { messages: { orderBy: { createdAt: "asc" } } },
      });
    }

    // Save user message
    await prisma.message.create({
      data: { role: "user", content: message, conversationId: conversation.id },
    });

    // Build message history for OpenAI
    const history = conversation.messages.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));
    history.push({ role: "user", content: message });

    // Stream response from OpenAI
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful AI assistant. Respond concisely and accurately." },
        ...history,
      ],
      stream: true,
      max_tokens: 1024,
    });

    // Collect the full response for saving
    let fullResponse = "";
    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || "";
            fullResponse += content;
            controller.enqueue(encoder.encode(content));
          }
          // Save assistant message after streaming completes
          await prisma.message.create({
            data: { role: "assistant", content: fullResponse, conversationId: conversation.id },
          });
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Conversation-Id": conversation.id,
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
