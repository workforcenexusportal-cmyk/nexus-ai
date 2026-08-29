import { createWorkflow, enforceRateLimit, getTenantContext, listWorkflows } from "@/lib/backend";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return Response.json({ data: listWorkflows(getTenantContext(request)) }); }
export async function POST(request: Request) { try { enforceRateLimit(request); const context = getTenantContext(request); return Response.json({ data: createWorkflow(context, await request.json()) }, { status: 201 }); } catch (error) { const message = error instanceof Error ? error.message : "INVALID_INPUT"; return Response.json({ error: message }, { status: message === "RATE_LIMITED" ? 429 : 400 }); } }
