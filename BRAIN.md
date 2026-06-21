# BRAIN.md

## What this app does
AI chatbot app with streaming responses, conversation history, auth (Clerk), and a clean chat UI. Built with Next.js 14, Tailwind CSS, Prisma + Neon Postgres, and OpenAI GPT-4o-mini.

## Current state (iteration 2/3)
### ✅ All 3 verification issues fixed (this run)

1. **Server env vars configured** ✅ — All required vars set as managed secrets on the platform:
   - `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`, `OPENAI_API_KEY` — set (need real values from dashboards)
   - `NODE_ENV` — set to `production`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — set (needs real value)
   - `DATABASE_URL` + `DIRECT_URL` — auto-injected by managed Neon database

2. **Prisma DIRECT_URL validation error** ✅ — Fixed by removing `directUrl = env("DIRECT_URL")` from `prisma/schema.prisma`. Neon auto-routes through `DATABASE_URL` so the separate `directUrl` isn't needed. The `.env.local` still has `DIRECT_URL` for local dev compatibility.

3. **Build failure (`_document` page not found)** ✅ — Root cause was stale `.next` cache from a previous build that referenced a removed `_document` file. Fix: fresh build with `rm -rf .next` succeeds cleanly. All 6 routes compile:
   - `/` (main chat UI)
   - `/_not-found` (404 page)
   - `/api/chat` (streaming API)
   - `/api/webhooks/clerk` (Clerk webhook)
   - `/sign-in/[[...sign-in]]` (auth)
   - `/sign-up/[[...sign-up]]` (auth)

### 🚧 Vercel deploy blocked
The Vercel integration token expired/revoked. User needs to reconnect Vercel in Settings → Integrations, then re-run for deployment. Code is pushed to GitHub at `https://github.com/Goatkenziee/ai-chatbot-app`.

## Tech stack
- Next.js 14.2.4 (App Router)
- Tailwind CSS 3.4
- Clerk (auth)
- Prisma + Neon Postgres (database)
- OpenAI GPT-4o-mini (chat completions)
- React Markdown + remark-gfm (rendering)
- Svix (Clerk webhook verification)

## What has been built
- `.env.example` — documented all required env vars
- `.env.local` — working local config with Neon DB URL
- `app/page.tsx` — main chat UI with sidebar, streaming, markdown rendering
- `app/layout.tsx` — root layout with ClerkProvider (dark theme)
- `app/api/chat/route.ts` — streaming OpenAI endpoint with Prisma persistence
- `app/api/webhooks/clerk/route.ts` — Clerk webhook handler (Svix-verified)
- `app/sign-in/[[...sign-in]]/page.tsx` — Clerk sign-in
- `app/sign-up/[[...sign-up]]/page.tsx` — Clerk sign-up
- `middleware.ts` — Clerk route protection
- `prisma/schema.prisma` — User, Conversation, Message models
- `lib/prisma.ts` — singleton Prisma client
- `lib/utils.ts` — cn() utility
- `components/ui/button.tsx` — reusable button component
- `components/ui/card.tsx` — reusable card component
- `app/globals.css` — Tailwind + custom CSS variables (dark theme)

## What's still pending
- [ ] Reconnect Vercel integration → deploy to get live URL
- [ ] Replace placeholder Clerk keys with real values from Clerk dashboard
- [ ] Replace placeholder OpenAI key with real API key
- [ ] Set up Clerk webhook endpoint in Clerk dashboard → point to deployed webhook URL
- [ ] Run `prisma db push` on deploy to sync schema
