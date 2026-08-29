import { createLead, enforceRateLimit, getTenantContext, listLeads } from "@/lib/backend";
import { durableRateLimit } from "@/lib/redis";
import { sessionContext } from "@/lib/auth";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return Response.json({ data: await listLeads(await sessionContext(request)) }); }
export async function POST(request: Request) { try { enforceRateLimit(request); if (!(await durableRateLimit(`leads:${request.headers.get("x-forwarded-for") ?? "local"}`))) return Response.json({ error: "RATE_LIMITED" }, { status: 429 }); const context = await sessionContext(request); if (!context.tenantId) return Response.json({ error: "UNAUTHENTICATED" }, { status: 401 }); return Response.json({ data: await createLead(context, await request.json()) }, { status: 201 }); } catch (error) { const message = error instanceof Error ? error.message : "INVALID_INPUT"; return Response.json({ error: message }, { status: message === "RATE_LIMITED" ? 429 : 400 }); } }
