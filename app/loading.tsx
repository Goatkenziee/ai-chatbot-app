import { ChatSkeleton } from "@/components/loading-skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header skeleton */}
      <div className="h-14 sm:h-16 border-b" />
      {/* Content skeleton */}
      <div className="mx-auto w-full max-w-3xl flex-1">
        <ChatSkeleton />
      </div>
    </div>
  );
}
