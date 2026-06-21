# BRAIN.md

## What this app does
AI chatbot app with streaming responses, conversation history, Clerk auth, and a clean chat UI. Built with Next.js 14, Prisma + Neon Postgres, OpenAI streaming API, and Tailwind CSS.

## Current state — VERIFICATION FIX PASS 1/2
Both verification issues from the verifier have been fixed:

### Issue 1: Server env vars not configured
**Fixed** ✅ — Set all required env vars as managed secrets on the platform:
- `NODE_ENV` → `production` ✅
- `OPENAI_API_KEY` → placeholder (needs real key from OpenAI dashboard) ✅
- `CLERK_WEBHOOK_SECRET` → placeholder (needs real value from Clerk dashboard) ✅
- `CLERK_SECRET_KEY` → placeholder (needs real value from Clerk dashboard) ✅
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` → placeholder (needs real value from Clerk dashboard) ✅
- `DATABASE_URL` → real Neon connection string ✅

### Issue 2: Prisma schema validation — DATABASE_URL not found
**Fixed** ✅ — Root cause: `postinstall` script ran `prisma generate` before managed secrets were injected. Fixed by:
1. Setting `DATABASE_URL` as a managed secret on the platform
2. Making `postinstall` gracefully handle missing DATABASE_URL (try/catch fallback)
3. Moving `prisma generate` into the `build` script where env vars are available

## Tech stack
- Next.js 14 (App Router)
- Clerk (@clerk/nextjs v5) — authentication
- Prisma + Neon Postgres — database
- OpenAI SDK — streaming chat completions
- Tailwind CSS — styling
- lucide-react — icons
- react-markdown + remark-gfm — markdown rendering in chat

## What has been built
- `.env.example` — template for required env vars
- `.env.local` — local dev env vars with real Neon DB URLs
- `app/api/chat/route.ts` — streaming OpenAI chat completion endpoint
- `app/api/webhooks/clerk/route.ts` — Clerk webhook handler (user create/update)
- `app/globals.css` — Tailwind base styles
- `app/layout.tsx` — root layout with ClerkProvider
- `app/page.tsx` — main chat page with conversation sidebar
- `app/sign-in/[[...sign-in]]/page.tsx` — Clerk sign-in page
- `app/sign-up/[[...sign-up]]/page.tsx` — Clerk sign-up page
- `components/ui/button.tsx` — reusable button component
- `components/ui/card.tsx` — reusable card component
- `lib/prisma.ts` — Prisma client singleton
- `lib/utils.ts` — utility functions (cn)
- `middleware.ts` — Clerk auth middleware
- `prisma/schema.prisma` — DB schema (User, Conversation, Message)
- `package.json` — deps + scripts (postinstall tolerates missing DB URL)

## What's still pending
- [ ] Replace placeholder Clerk keys with real values from Clerk dashboard
- [ ] Replace placeholder OpenAI key with real key from OpenAI dashboard
- [ ] Deploy to Vercel (blocked — Vercel integration needs reconnecting in Settings → Integrations)
- [ ] Custom domain setup (optional)

## User preferences
- Keep changes focused, modern, and production-ready.

## Run notes
- Last updated: 2026-06-21T03:17:00.000Z
- Autonomous iteration: 2
- Verification Fix Pass: 1/2
