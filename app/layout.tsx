import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatAI — Your AI Assistant",
  description: "A modern AI chatbot with streaming responses, conversation history, and a beautiful chat interface.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "hsl(252, 95%, 70%)",
          colorBackground: "hsl(240, 10%, 4%)",
          colorText: "hsl(0, 0%, 98%)",
          colorInputBackground: "hsl(240, 8%, 7%)",
          colorInputText: "hsl(0, 0%, 98%)",
          borderRadius: "0.75rem",
        },
      }}
    >
      <html lang="en" className="dark">
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
