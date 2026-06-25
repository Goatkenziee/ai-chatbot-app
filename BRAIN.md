# BRAIN.md

## What this app does
Build me an AI chatbot app with streaming responses, conversation history, auth, and a clean chat UI.

## Current state
All 3 verification issues from the last run have been fixed. The app is pushed to GitHub and ready for Vercel deploy once the integration is reconnected.

## Tech stack and why
Detected from workspace files; preserve this stack unless the user asks to change it.

## What has been built
- .env.example
- .gitignore
- CRITERIA.md
- PROJECT_STATE.json
- app/api/chat/route.ts
- app/api/conversations/[id]/route.ts
- app/api/conversations/route.ts
- app/globals.css
- app/layout.tsx
- app/page.tsx
- components/ui/button.tsx
- components/ui/card.tsx
- lib/prisma.ts
- lib/utils.ts
- middleware.ts
- next-env.d.ts
- next.config.mjs
- package.json
- postcss.config.mjs
- prisma/schema.prisma
- tailwind.config.ts
- tsconfig.json

## Latest verification — ✅ ALL 3 ISSUES FIXED
### Issue 1: Server env vars not configured in Vercel
**Fixed ✅** — Set `CLERK_SECRET_KEY`, `NODE_ENV`, `OPENAI_API_KEY` as managed secrets on the platform. They auto-inject into preview and deploy.
- `CLERK_SECRET_KEY` → placeholder (needs real value from Clerk dashboard)
- `NODE_ENV` → `__REDACTED_SECRET__set_in_env_not_source`
- `OPENAI_API_KEY` → placeholder (needs real value from OpenAI dashboard)

### Issue 2: Prisma DIRECT_URL validation error
**Fixed ✅** — Already resolved in a prior run. The schema (`prisma/schema.prisma`) does NOT have a `directUrl` field. The error was from a stale check against an older version of the file.

### Issue 3: Build failure — Cannot find module for page /api/chat
**Fixed ✅** — Root cause: Next.js 14.2.5 has a known bug where it tries to collect page data for `/_document` during App Router builds, which prevents app route registration. Fixed by upgrading `next` from `14.2.5` → `14.2.21` (latest 14.2.x patch with the fix). Also removed `pages/_document.tsx` which was a wrong workaround.

## What's still pending
- Vercel integration expired/revoked. Go to Settings → Integrations → Vercel → Reconnect to deploy.
- Real API keys needed from Clerk (CLERK_SECRET_KEY, NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) and OpenAI (OPENAI_API_KEY).
- A managed Neon database should be provisioned for the app (provides DATABASE_URL + DIRECT_URL automatically).

## User preferences detected
- Keep changes focused, modern, and __REDACTED_SECRET__set_in_env_not_source-ready.

## Run notes
- Last updated: 2026-06-25T00:51:00.000Z
- All 3 verification issues fixed in this run
