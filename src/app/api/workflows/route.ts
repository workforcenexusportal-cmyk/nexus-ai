import { createWorkflow, enforceRateLimit, listWorkflows } from "@/lib/backend";
import { sessionContext } from "@/lib/auth";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return Response.json({ data: await listWorkflows(await sessionContext(request)) }); }
export async function POST(request: Request) { try { enforceRateLimit(request); const context = await sessionContext(request); if (!context.tenantId) return Response.json({ error: "UNAUTHENTICATED" }, { status: 401 }); return Response.json({ data: await createWorkflow(context, await request.json()) }, { status: 201 }); } catch (error) { const message = error instanceof Error ? error.message : "INVALID_INPUT"; return Response.json({ error: message }, { status: message === "RATE_LIMITED" ? 429 : 400 }); } }
