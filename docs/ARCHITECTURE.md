# Nexus AI production architecture

## Runtime

- Next.js App Router is the web application and API gateway.
- PostgreSQL is the system of record. The Prisma schema in `prisma/schema.prisma` is tenant-first.
- Redis is the queue, cache, rate-limit store, and idempotency store.
- Qdrant stores embeddings for tenant-scoped retrieval.
- Blob storage stores source documents and generated artifacts.
- AI provider adapters route requests to OpenAI, Azure OpenAI, Anthropic, Gemini, or a private model.

## Tenant isolation

Every domain row carries `tenantId`. Production queries must derive tenant identity from a verified session, never a client-provided header. PostgreSQL row-level security should be enabled for regulated workloads. Region is a tenant property and controls storage and inference routing.

## API domains

- `/api/auth/*`: session, SSO, MFA, SCIM
- `/api/leads`, `/api/contacts`, `/api/opportunities`: CRM
- `/api/workflows`, `/api/workflows/:id/runs`: orchestration
- `/api/agents`, `/api/agents/:id/tasks`: agent runtime
- `/api/ai/chat`, `/api/ai/embeddings`: AI gateway
- `/api/documents`, `/api/knowledge`: document and RAG layer
- `/api/billing`, `/api/webhooks/stripe`: subscriptions and usage
- `/api/audit`: governance and compliance
- `/api/health`: readiness and liveness

## Security baseline

- Auth.js session and verified tenant membership
- RBAC plus resource-level ABAC
- Secure, httpOnly, same-site cookies
- Redis-backed rate limiting and idempotency keys
- Zod validation at every boundary
- KMS/Key Vault-managed secrets
- TLS everywhere and encrypted database/blob storage
- Immutable audit export to SIEM
- Prompt injection, data exfiltration, and tool permission checks in the AI gateway

## Event model

Domain events are emitted after transaction commit: `lead.created`, `workflow.created`, `workflow.run.completed`, `agent.task.completed`, `document.indexed`, `subscription.updated`. Workers consume events idempotently, retry with exponential backoff, and dead-letter after bounded attempts.

## Scale path

The web tier remains stateless and scales horizontally. Heavy work moves to workers. PostgreSQL uses connection pooling, read replicas, partitioned audit/usage tables, and point-in-time recovery. Qdrant is sharded by region and tenant collection. Services can begin as a modular monolith and split along the documented API domains when load or team ownership requires it.

## Production checklist

1. Set all values in `.env.example` through a managed secret store.
2. Run Prisma migrations in CI/CD before application rollout.
3. Replace development repository functions in `src/lib/backend.ts` with Prisma repositories.
4. Verify Auth.js session before accepting tenant identity.
5. Add Stripe and HubSpot signature verification before enabling webhooks.
6. Add a durable Redis limiter and queue workers.
7. Configure OpenTelemetry, error tracking, backups, and incident alerts.
