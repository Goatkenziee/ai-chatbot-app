# BRAIN.md

## What this app does
AI chatbot app with streaming responses, saved conversation history, auth, and a clean chat UI.

## Current state
✅ **Build passes** — Next.js 14.2.21 compiles with zero errors (5 static pages).
✅ **PM polish shipped** — SEO metadata, responsive mobile nav, error/loading/404 states, sitemap, robots.txt.
✅ **GitHub pushed** — All 28 files on main branch at https://github.com/Goatkenziee/ai-chatbot-app
⚠️ **Vercel deploy blocked** — Vercel integration token expired. Needs reconnect in Settings → Integrations.

## Tech stack
- Next.js 14.2.21 (App Router)
- React 18.3, TypeScript 5.5
- Tailwind CSS 3.4
- Clerk (auth), OpenAI (chat), Prisma (DB — not yet wired)
- lucide-react icons, clsx + tailwind-merge utilities

## Files (28 total)
### Pages & Layout
- `app/layout.tsx` — Root layout with full SEO metadata, OG/Twitter cards, Inter font
- `app/page.tsx` — Homepage with hero, feature cards, loading/error states
- `app/error.tsx` — Global error boundary (client component)
- `app/loading.tsx` — Route-level loading skeleton
- `app/not-found.tsx` — Custom 404 page
- `app/sitemap.ts` — Dynamic sitemap generation

### Components
- `components/ui/mobile-nav.tsx` — Slide-out mobile nav with backdrop
- `components/ui/button.tsx` — Reusable button component
- `components/ui/card.tsx` — Reusable card component
- `components/chat-error.tsx` — Chat-specific error display with retry
- `components/error-boundary.tsx` — React error boundary wrapper
- `components/loading-skeleton.tsx` — Chat and card skeleton loaders

### Lib & Config
- `lib/store.ts` — Zustand store for chat state
- `lib/utils.ts` — Utility functions (cn)
- `middleware.ts` — Clerk auth middleware
- `app/globals.css` — Global styles with responsive typography, animations
- `tailwind.config.ts`, `postcss.config.mjs`, `next.config.mjs`, `tsconfig.json`, `package.json`

### Public
- `public/robots.txt` — SEO robots with sitemap link

## What's still pending
- Reconnect Vercel integration and deploy
- Wire up OpenAI API for actual chat streaming
- Wire up Clerk auth for real login/signup
- Add actual chat page (/chat)
- Add DB (Prisma/Neon) for conversation persistence

## User preferences
- Modern, dark-themed, production-ready UI
- Responsive down to mobile
- SEO-optimized
- Graceful error/loading/empty states

## Run notes
- Last updated: 2026-06-27
- Run: PM polish redeploy
