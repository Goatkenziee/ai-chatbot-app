import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-primary">404</h1>
        <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 sm:mt-8 inline-flex h-10 sm:h-11 items-center justify-center rounded-md bg-primary px-4 sm:px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
