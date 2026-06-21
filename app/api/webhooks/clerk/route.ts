import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { prisma } from "@/lib/prisma";

interface WebhookEvent {
  type: string;
  data: {
    id: string;
    email_addresses?: { email_address: string }[];
    first_name?: string;
    last_name?: string;
    username?: string;
    image_url?: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const svixId = req.headers.get("svix-id");
    const svixTimestamp = req.headers.get("svix-timestamp");
    const svixSignature = req.headers.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
      return NextResponse.json({ error: "Missing svix headers" }, { status: 400 });
    }

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
    const evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;

    const { id } = evt.data;
    const email = evt.data.email_addresses?.[0]?.email_address || "";
    const name = [evt.data.first_name, evt.data.last_name].filter(Boolean).join(" ") || evt.data.username;

    switch (evt.type) {
      case "user.created":
      case "user.updated":
        await prisma.user.upsert({
          where: { id },
          create: { id, email, name },
          update: { email, name },
        });
        break;

      case "user.deleted":
        await prisma.user.delete({ where: { id } }).catch(() => {});
        break;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook verification failed" }, { status: 400 });
  }
}
