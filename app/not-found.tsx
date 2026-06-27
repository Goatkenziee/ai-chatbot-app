import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <div className="flex items-center gap-2 font-semibold text-lg">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        App
      </div>
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="max-w-md text-muted-foreground">
        This page doesn&apos;t exist or was removed. Check the URL or head back.
      </p>
      <Link href="/">
        <Button>Go home</Button>
      </Link>
    </div>
  );
}
