import { createLead, enforceRateLimit, getTenantContext, listLeads } from "@/lib/backend";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { const context = getTenantContext(request); return Response.json({ data: listLeads(context) }); }
export async function POST(request: Request) { try { enforceRateLimit(request); const context = getTenantContext(request); const lead = createLead(context, await request.json()); return Response.json({ data: lead }, { status: 201 }); } catch (error) { const message = error instanceof Error ? error.message : "INVALID_INPUT"; const status = message === "RATE_LIMITED" ? 429 : 400; return Response.json({ error: message }, { status }); } }
