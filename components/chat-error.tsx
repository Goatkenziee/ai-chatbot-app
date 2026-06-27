"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function ChatError({ message, onRetry }: ChatErrorProps) {
  return (
    <div className="mx-auto max-w-md rounded-lg border border-destructive/20 bg-destructive/5 p-4 sm:p-6 text-center">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-5 w-5 text-destructive" />
      </div>
      <h3 className="text-sm font-semibold">Chat Error</h3>
      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
        {message || "Something went wrong while processing your message."}
      </p>
      {onRetry && (
        <Button variant="outline" size="sm" className="mt-3 sm:mt-4" onClick={onRetry}>
          <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
          Retry
        </Button>
      )}
    </div>
  );
}
