# BRAIN.md — AI Chatbot App

## What this app does
An AI chatbot app with streaming responses, saved conversation history (in-memory), Clerk authentication, and a clean chat UI. Built with Next.js 14, Tailwind CSS, and OpenAI streaming API.

## Current state (Run 2 — PM Polish Ship)
✅ **All PM polish improvements built and pushed to GitHub:**
- **SEO** — Full `<head>` metadata (title, description, keywords, Open Graph, Twitter card, robots meta), `app/sitemap.ts` generating `/sitemap.xml`, `public/robots.txt` allowing all crawlers + sitemap link
- **Responsive** — Fluid typography (`text-sm sm:text-base lg:text-lg`), mobile nav with slide-out panel + backdrop overlay, touch-friendly targets (min 44px), responsive grid layout
- **Error states** — `app/error.tsx` (global error boundary with retry), `error-boundary.tsx` (React error boundary wrapper), `chat-error.tsx` (inline chat error with retry button), `not-found.tsx` (404 page), `loading.tsx` + `loading-skeleton.tsx` (shimmer loading states)
- **TypeScript** — `tsc --noEmit` passes clean
- **Build** — `next build` verified clean (5 static pages)
- **GitHub** — All 28 files pushed to `main` (commit `28ceecc`)

## Tech stack
- **Framework:** Next.js 14.2.21 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4, `clsx` + `tailwind-merge`
- **Auth:** Clerk (`@clerk/nextjs`)
- **AI:** OpenAI SDK (`openai`) — streaming chat completions
- **UI Icons:** Lucide React
- **Markdown:** `react-markdown` + `remark-gfm` + `rehype-highlight`
- **State:** In-memory store (`lib/store.ts`) — conversations, messages, streaming state
- **Utilities:** `uuid` for message IDs

## Key architectural decisions
- Client components use `"use client"` for interactivity (chat UI, error boundaries, mobile nav)
- Server components (layout, static pages) remain server-rendered
- Auth middleware via Clerk — protects API routes and chat pages
- Error boundary wraps the chat area for graceful failure recovery
- Mobile nav is a slide-out panel (not a hamburger dropdown) for better UX on small screens
- All styling uses CSS custom properties via Tailwind's `dark` class on `<html>`

## What's still pending
- **Vercel deploy** — Vercel integration token expired. User needs to reconnect at Settings → Integrations → Vercel → Reconnect, then re-run to deploy.
- Set real Clerk + OpenAI env vars in Vercel project settings for production functionality.
- Add API route (`app/api/chat/route.ts`) for the streaming OpenAI endpoint.
- Add Prisma/SQLite for persistent conversation history.

## Run notes
- Last updated: 2026-06-27T02:25:00.000Z
- Run count: 2
- Autonomous iteration: 0
