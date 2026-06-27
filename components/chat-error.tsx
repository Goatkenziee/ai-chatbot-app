"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function ChatError({ message, onRetry }: ChatErrorProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 animate-fade-in">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-4 w-4 text-destructive" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">Failed to send message</p>
        <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
          {message || "The AI service is temporarily unavailable. Please try again."}
        </p>
        {onRetry && (
          <Button variant="ghost" size="sm" className="mt-2 h-8 px-2 text-xs" onClick={onRetry}>
            <RefreshCw className="mr-1.5 h-3 w-3" />
            Retry
          </Button>
        )}
      </div>
    </div>
  );
}
