"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MobileNav } from "@/components/ui/mobile-nav";
import { ArrowRight, Sparkles, MessageSquare, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-semibold text-sm sm:text-base">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="gradient-text">AI Chatbot</span>
          </div>
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a className="transition hover:text-foreground" href="#features">Features</a>
            <a className="transition hover:text-foreground" href="#about">About</a>
          </nav>
          {/* Mobile nav */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="h-9 px-3 text-xs sm:text-sm sm:px-4">
              Sign in
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <section className="flex flex-1 flex-col justify-center py-12 sm:py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs sm:text-sm text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Powered by advanced AI
            </div>
            <h1 className="text-fluid-2xl font-bold tracking-tight leading-tight">
              Smart conversations,<br />
              <span className="gradient-text">powered by AI</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-fluid-base leading-relaxed text-muted-foreground max-w-lg">
              Engage in real-time, intelligent conversations with streaming responses.
              Save your chat history and pick up right where you left off.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <Button className="h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base">
                Start chatting <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base">
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Feature cards */}
          <div id="features" className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6">
              <MessageSquare className="mb-3 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-sm sm:text-base font-semibold">Streaming Responses</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Real-time token-by-token streaming for a fluid, natural conversation experience.
              </p>
            </Card>
            <Card className="p-4 sm:p-6">
              <Shield className="mb-3 h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              <h3 className="text-sm sm:text-base font-semibold">Secure &amp; Private</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Authentication built in. Your conversations stay yours — always encrypted.
              </p>
            </Card>
            <Card className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <Sparkles className="mb-3 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-sm sm:text-base font-semibold">Feature 3</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Description for feature 3.
              </p>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
