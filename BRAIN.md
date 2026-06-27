# BRAIN.md

## What this app does
AI chatbot app with streaming responses, saved conversation history, auth, and a clean chat UI.

## Tech stack
- Next.js 14 (App Router) — framework
- TypeScript — type safety
- Tailwind CSS — styling
- Clerk — authentication (middleware)
- Zustand — client-side state (conversations/messages store)
- OpenAI — AI response streaming
- Lucide React — icons
- class-variance-authority + tailwind-merge — UI utilities

## What has been built

### SEO (shipped)
- Full `<head>` metadata in `app/layout.tsx` (title template, OG/Twitter cards, canonical, keywords, robots)
- `app/sitemap.ts` — auto-generated sitemap.xml
- `public/robots.txt` — allows all crawlers, points to sitemap

### Responsive (shipped)
- `components/ui/mobile-nav.tsx` — slide-out panel with backdrop + escape-key close + body scroll lock
- Responsive typography in `globals.css` (clamp-based font sizing)
- Fluid spacing in `page.tsx` (sm/md breakpoints on padding, margin, font-size)
- Sticky header with backdrop blur, desktop nav hidden on mobile

### Error States (shipped)
- `app/error.tsx` — client error boundary with reset button + go-home option
- `app/loading.tsx` — spinner for page-level loading
- `app/not-found.tsx` — 404 page with link home
- `components/chat-error.tsx` — retryable error card for chat area
- `components/error-boundary.tsx` — React error boundary wrapper
- `components/loading-skeleton.tsx` — ChatSkeleton + FeatureCardSkeleton

### Core App (previously built)
- `app/page.tsx` — landing page with hero, feature cards, responsive layout
- `lib/store.ts` — Zustand store for conversations, messages, streaming state
- `lib/utils.ts` — cn() utility
- `components/ui/button.tsx` — shadcn-style button with variants
- `components/ui/card.tsx` — reusable card component
- `middleware.ts` — Clerk auth middleware (public route: /)

## Latest verification
- `npm run build` — Compiled successfully, 5 static pages, zero errors
- GitHub push — all files pushed to main

## What's still pending
- Deploy to Vercel (token expired — reconnect integration)
- Add chat page (/chat) with streaming UI
- Add API route for OpenAI streaming (/api/chat)
- Add conversation list sidebar

## User preferences detected
- Modern, production-ready, polished UI
- Responsive + accessible
- SEO-optimized
- Graceful error handling

## Run notes
- Last updated: 2026-06-27T02:45:00.000Z
- Autonomous iteration: 1
