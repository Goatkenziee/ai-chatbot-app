import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-chatbot-app.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Chatbot — Smart Conversations, Powered by AI",
    template: "%s | AI Chatbot",
  },
  description:
    "Engage with our intelligent AI chatbot for seamless, real-time conversations. Stream responses, save history, and get answers instantly.",
  keywords: [
    "AI chatbot",
    "chatbot app",
    "AI assistant",
    "conversational AI",
    "streaming chat",
    "Next.js chatbot",
  ],
  authors: [{ name: "AI Chatbot" }],
  creator: "AI Chatbot",
  publisher: "AI Chatbot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AI Chatbot",
    title: "AI Chatbot — Smart Conversations, Powered by AI",
    description:
      "Engage with our intelligent AI chatbot for seamless, real-time conversations. Stream responses, save history, and get answers instantly.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "AI Chatbot — Smart Conversations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot — Smart Conversations, Powered by AI",
    description:
      "Engage with our intelligent AI chatbot for seamless, real-time conversations. Stream responses, save history, and get answers instantly.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@aichatbot",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ ["--font-sans" as string]: "Inter, system-ui, sans-serif" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
