export function ChatSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* User message skeleton */}
      <div className="flex justify-end">
        <div className="w-3/5 max-w-sm">
          <div className="h-10 shimmer rounded-xl" />
        </div>
      </div>
      {/* AI response skeleton */}
      <div className="flex justify-start">
        <div className="w-4/5 max-w-lg space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-5 rounded-full shimmer" />
            <div className="h-3 w-20 shimmer rounded" />
          </div>
          <div className="h-4 w-full shimmer rounded" />
          <div className="h-4 w-11/12 shimmer rounded" />
          <div className="h-4 w-3/4 shimmer rounded" />
        </div>
      </div>
      {/* Another user message skeleton */}
      <div className="flex justify-end">
        <div className="w-2/5 max-w-sm">
          <div className="h-8 shimmer rounded-xl" />
        </div>
      </div>
      {/* AI response skeleton */}
      <div className="flex justify-start">
        <div className="w-4/5 max-w-lg space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-5 rounded-full shimmer" />
            <div className="h-3 w-24 shimmer rounded" />
          </div>
          <div className="h-4 w-full shimmer rounded" />
          <div className="h-4 w-10/12 shimmer rounded" />
        </div>
      </div>
    </div>
  );
}

export function MessageSkeleton() {
  return (
    <div className="flex items-start gap-3 p-4 animate-fade-in">
      <div className="h-8 w-8 shrink-0 rounded-full shimmer" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-20 shimmer rounded" />
        <div className="h-4 w-full shimmer rounded" />
        <div className="h-4 w-4/5 shimmer rounded" />
      </div>
    </div>
  );
}
