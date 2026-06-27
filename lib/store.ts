// In-memory conversation store (file-based JSON persistence)
// Falls back to localStorage on the client. For production, replace with a DB.

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  title: string;
  userId: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

// Server-side store (module-level, survives hot reloads in dev)
const globalForStore = globalThis as typeof globalThis & {
  conversations?: Map<string, Conversation>;
};

if (!globalForStore.conversations) {
  globalForStore.conversations = new Map();
}

const conversations = globalForStore.conversations;

export function getConversations(userId: string): Conversation[] {
  return Array.from(conversations.values())
    .filter((c) => c.userId === userId)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export function getConversation(id: string): Conversation | undefined {
  return conversations.get(id);
}

export function createConversation(userId: string, title?: string): Conversation {
  const now = new Date().toISOString();
  const conversation: Conversation = {
    id: crypto.randomUUID(),
    title: title || "New Chat",
    userId,
    messages: [],
    createdAt: now,
    updatedAt: now,
  };
  conversations.set(conversation.id, conversation);
  return conversation;
}

export function deleteConversation(id: string): boolean {
  return conversations.delete(id);
}

export function addMessage(
  conversationId: string,
  message: Omit<Message, "id" | "createdAt">
): Message | null {
  const conv = conversations.get(conversationId);
  if (!conv) return null;

  const msg: Message = {
    id: crypto.randomUUID(),
    ...message,
    createdAt: new Date().toISOString(),
  };
  conv.messages.push(msg);
  conv.updatedAt = new Date().toISOString();

  // Auto-title from first user message
  if (conv.title === "New Chat" && message.role === "user") {
    conv.title = message.content.slice(0, 60) + (message.content.length > 60 ? "..." : "");
  }

  return msg;
}
