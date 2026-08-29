# Vercel production activation

## 1. Import the repository

Import `workforcenexusportal-cmyk/nexus-ai` into Vercel. Framework preset: Next.js. Build command is already configured in `vercel.json`.

## 2. Configure variables

Required for persistent production data:

- `DATABASE_URL`: pooled PostgreSQL connection string
- `AUTH_SECRET`: generated secret, minimum 32 random characters
- `AUTH_URL`: production deployment URL

Recommended:

- `REDIS_URL`
- `QDRANT_URL`
- `QDRANT_API_KEY`
- `OPENAI_API_KEY` or Azure OpenAI variables
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `HUBSPOT_ACCESS_TOKEN`
- `HUBSPOT_WEBHOOK_SECRET`
- `NEXT_PUBLIC_APP_URL`

## 3. Database

Run locally or in CI after installing dependencies:

```bash
npm run db:generate
npx prisma migrate dev --name init
npm run db:seed
```

For production, use a migration job or:

```bash
npm run db:migrate
```

Never expose `DATABASE_URL`, provider keys, webhook secrets, or `AUTH_SECRET` as `NEXT_PUBLIC_*` variables.

## 4. Webhooks

Configure Stripe and HubSpot webhooks to target the production API URL. Before accepting real events, add provider signature verification and idempotency persistence backed by Redis/PostgreSQL.

## 5. Smoke checks

```bash
curl https://YOUR_DOMAIN/api/health
curl https://YOUR_DOMAIN/api/agents
curl https://YOUR_DOMAIN/api/workflows
```

The current default repository fallback is designed for local development only. For production authentication, replace development headers with verified Auth.js session claims and derive tenant membership server-side.
