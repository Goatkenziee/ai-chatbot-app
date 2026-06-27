import { Card } from "@/components/ui/card";

export function ChatSkeleton() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
      {/* User message skeleton */}
      <div className="flex justify-end">
        <div className="w-3/4 sm:w-1/2 rounded-2xl rounded-br-md bg-muted p-3 sm:p-4">
          <div className="h-3 sm:h-4 w-full animate-pulse rounded bg-muted-foreground/20" />
          <div className="mt-2 h-3 sm:h-4 w-3/4 animate-pulse rounded bg-muted-foreground/20" />
        </div>
      </div>

      {/* Bot message skeleton */}
      <div className="flex justify-start">
        <div className="w-4/5 sm:w-3/5 rounded-2xl rounded-bl-md border bg-card p-3 sm:p-4">
          <div className="h-3 sm:h-4 w-full animate-pulse rounded bg-muted-foreground/20" />
          <div className="mt-2 h-3 sm:h-4 w-5/6 animate-pulse rounded bg-muted-foreground/20" />
          <div className="mt-2 h-3 sm:h-4 w-2/3 animate-pulse rounded bg-muted-foreground/20" />
          <div className="mt-2 h-3 sm:h-4 w-1/2 animate-pulse rounded bg-muted-foreground/20" />
        </div>
      </div>

      {/* Second user message skeleton */}
      <div className="flex justify-end">
        <div className="w-2/3 sm:w-2/5 rounded-2xl rounded-br-md bg-muted p-3 sm:p-4">
          <div className="h-3 sm:h-4 w-full animate-pulse rounded bg-muted-foreground/20" />
        </div>
      </div>

      {/* Second bot message skeleton */}
      <div className="flex justify-start">
        <div className="w-5/6 sm:w-4/6 rounded-2xl rounded-bl-md border bg-card p-3 sm:p-4">
          <div className="h-3 sm:h-4 w-full animate-pulse rounded bg-muted-foreground/20" />
          <div className="mt-2 h-3 sm:h-4 w-4/5 animate-pulse rounded bg-muted-foreground/20" />
          <div className="mt-2 h-3 sm:h-4 w-3/5 animate-pulse rounded bg-muted-foreground/20" />
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <Card className="p-4 sm:p-6">
      <div className="mb-3 h-5 w-5 sm:h-6 sm:w-6 animate-pulse rounded bg-muted-foreground/20" />
      <div className="h-4 sm:h-5 w-2/3 animate-pulse rounded bg-muted-foreground/20" />
      <div className="mt-2 h-3 sm:h-4 w-full animate-pulse rounded bg-muted-foreground/20" />
      <div className="mt-1.5 h-3 sm:h-4 w-4/5 animate-pulse rounded bg-muted-foreground/20" />
    </Card>
  );
}
