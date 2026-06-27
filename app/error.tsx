"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-4 sm:mb-6 mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 text-destructive" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Something went wrong</h1>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={reset} className="w-full sm:w-auto">
            Try again
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => (window.location.href = "/")}
          >
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}
