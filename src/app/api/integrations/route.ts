import { getTenantContext, requireRole } from "@/lib/backend";
export const dynamic = "force-dynamic";
const providers = [{ id: "openai", label: "OpenAI", env: "OPENAI_API_KEY" }, { id: "azure-openai", label: "Azure OpenAI", env: "AZURE_OPENAI_API_KEY" }, { id: "stripe", label: "Stripe", env: "STRIPE_SECRET_KEY" }, { id: "hubspot", label: "HubSpot", env: "HUBSPOT_ACCESS_TOKEN" }, { id: "qdrant", label: "Qdrant", env: "QDRANT_URL" }, { id: "redis", label: "Redis", env: "REDIS_URL" }];
export async function GET(request: Request) { const context = getTenantContext(request); requireRole(context, ["owner", "admin", "operator"]); return Response.json({ data: providers.map(provider => ({ id: provider.id, label: provider.label, configured: Boolean(process.env[provider.env]) })) }); }
