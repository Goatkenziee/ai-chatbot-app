# BRAIN.md — AI Chatbot App

## What this app does
An AI chatbot app with streaming responses, conversation history, Clerk auth, and a clean chat UI built with Next.js 14.

## Tech Stack
- **Framework**: Next.js 14.2.4 (App Router)
- **Auth**: Clerk (@clerk/nextjs v5) — sign-in, sign-up, middleware protection
- **Database**: Neon Postgres (managed via YouMe platform) + Prisma ORM
- **AI**: OpenAI API (streaming chat completions)
- **UI**: Tailwind CSS, lucide-react icons, react-markdown
- **Deployment**: GitHub + Vercel

## What has been built
- **Auth**: Sign-in/sign-up pages at `/sign-in` and `/sign-up`, Clerk middleware protecting all pages except public routes (home, sign-in, sign-up, webhooks)
- **Chat API**: `POST /api/chat` — streaming OpenAI responses, saves conversations/messages to Prisma
- **Webhooks**: `POST /api/webhooks/clerk` — handles user.created/.updated/.deleted via Svix verification
- **Chat UI**: `app/page.tsx` — full chat interface with sidebar (conversation list, create/delete), message bubbles, loading states, auto-scroll
- **Database**: Neon Postgres provisioned with User, Conversation, Message models
- **Secrets**: All env vars set as managed secrets (auto-injected on deploy)

## Verification Status (last run)
- ✅ `prisma generate` — succeeds
- ✅ `npm run build` — succeeds (all 6 routes compiled)
- ✅ All 3 verification issues fixed:
  1. Server env vars set as managed secrets (CLERK_WEBHOOK_SECRET, NODE_ENV, OPENAI_API_KEY, etc.)
  2. Neon database provisioned — DATABASE_URL + DIRECT_URL auto-injected
  3. Build succeeds — `/api/chat` route found and compiled

## What's still pending
- Deploy to Vercel: Vercel integration needs reconnecting (Settings → Integrations → Vercel → Reconnect)
- Replace placeholder env values with real Clerk/OpenAI keys
- Push DB schema to Neon via `npx prisma db push`

## Key decisions
- Prisma schema uses both `url` and `directUrl` (Neon requires directUrl for migrations)
- `.env.local` has placeholder values for local dev; real values are managed secrets
- Postinstall script runs `prisma generate` automatically
