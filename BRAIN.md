# BRAIN.md — AI Chatbot App

## What this app does
An AI chatbot with streaming responses, conversation history, auth (Clerk), and a clean chat UI built with Next.js 14 + OpenAI.

## Tech stack
- Next.js 14.2.4 (App Router)
- Clerk (Auth)
- OpenAI (GPT-4o-mini, streaming)
- Prisma + Neon PostgreSQL (Database)
- Tailwind CSS (Styling)
- React Markdown + remark-gfm (Message rendering)

## Current state — VERIFICATION FIX PASS 2/2 ✅

### Issue 1: Server env vars not configured
**Fixed** ✅ — Set as managed secrets on the platform:
- `NODE_ENV` → `production`
- `OPENAI_API_KEY` → placeholder (needs real OpenAI key)
- `CLERK_SECRET_KEY` → placeholder (needs real Clerk key)
- `CLERK_WEBHOOK_SECRET` → placeholder (needs real Clerk key)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` → placeholder (needs real Clerk key)
- `DATABASE_URL` + `DIRECT_URL` → auto-injected by managed Neon database

### Issue 2: Prisma schema validation — DATABASE_URL not found
**Fixed** ✅ — `.env.local` now has the real Neon DATABASE_URL and DIRECT_URL. `prisma/schema.prisma` has `directUrl = env("DIRECT_URL")` restored. Prisma validate passes.

### Issue 3: Build failure — Cannot find module for page: /_document
**Fixed** ✅ — Stale `.next` cache was the root cause. After clearing `.next` and re-running `next build`, all 6 routes compile successfully:
- `/` (main chat UI, 10.2 kB)
- `/_not-found` (404 page)
- `/api/chat` (streaming API)
- `/api/webhooks/clerk` (Clerk webhook)
- `/sign-in/[[...sign-in]]` (auth)
- `/sign-up/[[...sign-up]]` (auth)

## Files
- 25 files in workspace
- Pushed to GitHub: https://github.com/Goatkenziee/ai-chatbot-app

## Deploy status
⛔ Blocked — Vercel integration expired. User needs to reconnect Vercel in Settings → Integrations.

## Next steps
1. User reconnects Vercel integration → deploy
2. User sets real Clerk keys (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY, CLERK_WEBHOOK_SECRET)
3. User sets real OPENAI_API_KEY
4. Run `prisma db push` to create tables in Neon
5. Set up Clerk webhook in Clerk dashboard pointing to `/api/webhooks/clerk`
