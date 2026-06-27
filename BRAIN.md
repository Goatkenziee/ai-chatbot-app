# BRAIN.md

## What this app does
AI chatbot app with streaming responses, saved conversation history, auth (Clerk), and a clean chat UI.

## Current state
✅ Build passes clean — all TypeScript and production build checks pass.

## Tech stack
- **Framework:** Next.js 14.2.21 (App Router)
- **Auth:** @clerk/nextjs
- **AI:** openai (streaming)
- **UI:** Tailwind CSS, lucide-react icons
- **Markdown:** react-markdown + rehype-highlight + remark-gfm
- **Utils:** clsx, tailwind-merge

## What has been built
- app/page.tsx — Main chat UI with message list, input bar, streaming
- app/layout.tsx — Root layout with Clerk provider, global styles
- app/error.tsx — Global error boundary
- app/loading.tsx — Route-level loading skeleton
- app/not-found.tsx — 404 page
- app/sitemap.ts — SEO sitemap
- components/chat-error.tsx — Inline error display with retry
- components/error-boundary.tsx — React error boundary wrapper
- components/loading-skeleton.tsx — Reusable loading placeholder
- components/ui/button.tsx — Button with variant + size props
- components/ui/card.tsx — Card component
- components/ui/mobile-nav.tsx — Mobile navigation drawer
- lib/store.ts — Zustand store for conversation state
- lib/utils.ts — cn() utility
- middleware.ts — Clerk auth middleware
- public/robots.txt — SEO robots
- tailwind.config.ts, tsconfig.json, next.config.mjs, postcss.config.mjs

## Latest verification
- ✅ TypeScript check (`tsc --noEmit`) — passes clean
- ✅ Production build (`next build`) — passes clean, 5 static pages generated

## What's still pending
- Deploy to Vercel
- Set up Clerk keys in production env
- Connect OpenAI API key
