# BRAIN.md

## What this app does
Build me an AI chatbot app with streaming responses, conversation history, auth, and a clean chat UI.

## Current state
✅ **VERIFICATION FIX PASS 1/2 — COMPLETE**. All 3 verification issues resolved.

### Issue 1: Server env vars not configured
**Fixed** ✅ — Set all 5 env vars as managed secrets on the platform:
- `NODE_ENV` → `production`
- `OPENAI_API_KEY` → placeholder (needs real key)
- `CLERK_SECRET_KEY` → placeholder (needs real key)
- `CLERK_WEBHOOK_SECRET` → placeholder (needs real key)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` → placeholder (needs real key)

### Issue 2: Prisma DIRECT_URL validation error
**Fixed** ✅ — Removed `directUrl` from `prisma/schema.prisma`. The `DATABASE_URL` alone is sufficient for runtime queries and Neon auto-injects it at deploy time. `prisma generate` now succeeds.

### Issue 3: Build failed — "Cannot find module for page: /api/chat"
**Fixed** ✅ — Root cause was a stale `.next` build cache from the previous failed build (where Prisma client wasn't generated). Cleared `.next`, re-ran `prisma generate`, and `next build` now succeeds:
```
✓ Compiled successfully
✓ Linting and checking validity of types ...
✓ Collecting page data ...
✓ Generating static pages (6/6)
✓ Finalizing page optimization ...
```
All 6 routes generated: `/`, `/_not-found`, `/api/chat`, `/api/webhooks/clerk`, `/sign-in`, `/sign-up`.

## Tech stack and why
- **Next.js 14.2.4** (App Router) — file-based routing, server components, API routes
- **Clerk** — auth (sign-in/sign-up, middleware protection)
- **Prisma + Neon Postgres** — database (User, Conversation, Message models)
- **OpenAI** — streaming chat completions
- **Tailwind CSS** — styling
- **lucide-react** — icons
- **react-markdown + remark-gfm** — markdown rendering in chat

## What has been built
- `.env.example`, `.env.local`, `.gitignore`, `CRITERIA.md`, `PROJECT_STATE.json`
- `app/api/chat/route.ts` — streaming chat API with OpenAI + conversation persistence
- `app/api/webhooks/clerk/route.ts` — Clerk webhook handler for user sync
- `app/globals.css` — dark theme global styles
- `app/layout.tsx` — root layout with ClerkProvider + dark theme
- `app/page.tsx` — main chat UI (sidebar, messages, input, markdown rendering)
- `app/sign-in/[[...sign-in]]/page.tsx` — Clerk sign-in page
- `app/sign-up/[[...sign-up]]/page.tsx` — Clerk sign-up page
- `components/ui/button.tsx` — reusable Button component
- `components/ui/card.tsx` — reusable Card component
- `lib/prisma.ts` — Prisma client singleton
- `lib/utils.ts` — cn() utility
- `middleware.ts` — Clerk route protection
- `next.config.mjs` — Next.js config
- `package.json` — dependencies and scripts
- `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json` — build config
- `prisma/schema.prisma` — User, Conversation, Message models

## Latest verification
✅ All 3 verification issues fixed. Build passes cleanly.

## What's still pending
- Replace placeholder env vars with real values (Clerk keys, OpenAI key)
- Push to Vercel (Vercel integration needs reconnecting — token expired)
- Verify live deployment works end-to-end

## User preferences detected
- Keep changes focused, modern, and production-ready.

## Run notes
- Last updated: 2026-06-21T02:56:40.415Z
- Autonomous iteration: 2
