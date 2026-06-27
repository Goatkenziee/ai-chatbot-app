# BRAIN.md

## What this app does
AI chatbot app with streaming responses, saved conversation history, auth, and a clean chat UI.

## Current state — ✅ Build verified, code on GitHub, deploy blocked
All 28 files are present, verified, and pushed to GitHub. `npm run build` compiles with zero errors (5 static pages, 1 middleware). The Vercel deploy is blocked because the Vercel integration token is expired.

### SEO improvements (shipped)
- `app/layout.tsx` — full metadata, OG/Twitter cards, canonical URL
- `app/sitemap.ts` — auto-generated sitemap
- `public/robots.txt` — allows all crawlers

### Responsive improvements (shipped)
- `components/ui/mobile-nav.tsx` — slide-out panel + backdrop overlay
- Responsive typography in `globals.css` (text-fluid-* clamp-based sizing)
- Fluid spacing in `page.tsx` (sm:/md:/lg: breakpoints)

### Error state improvements (shipped)
- `app/error.tsx` — global error UI with Try Again + Go Home
- `app/loading.tsx` — route-level skeleton loader
- `app/not-found.tsx` — 404 page with Go Home link
- `components/chat-error.tsx` — inline retry component
- `components/error-boundary.tsx` — React error boundary wrapper
- `components/loading-skeleton.tsx` — chat + card skeletons

## Tech stack
- Next.js 14.2.21 (App Router)
- React 18.3
- TypeScript 5.5
- Tailwind CSS 3.4
- Clerk (auth)
- OpenAI (chat API)
- lucide-react (icons)
- clsx + tailwind-merge (cn utility)

## What has been built
All 28 files in the repo: pages (home, error, loading, not-found, sitemap), components (chat-error, error-boundary, loading-skeleton, button, card, mobile-nav), lib (store, utils), config (next.config, tailwind, tsconfig, postcss), middleware, robots.txt, package.json.

## What's still pending
- **Vercel deploy** — needs Vercel token refresh (Settings → Integrations → Vercel → Reconnect)
- App needs real Clerk keys and OpenAI key set as env vars to function fully
- Chat UI pages (chat route, API route for streaming) — not yet built in the workspace

## User preferences
- Keep changes focused, modern, and production-ready.

## Run notes
- Run 2 (2026-06-27): Fixed truncated page.tsx in workspace, confirmed all 28 files from GitHub, build verified (zero errors), pushed fix commit 36b968c. Vercel deploy blocked by expired token.
