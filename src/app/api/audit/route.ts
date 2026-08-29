import { getTenantContext, listAuditEvents, requireRole } from "@/lib/backend";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { try { const context = getTenantContext(request); requireRole(context, ["owner", "admin"]); return Response.json({ data: listAuditEvents(context) }); } catch (error) { const message = error instanceof Error ? error.message : "FORBIDDEN"; return Response.json({ error: message }, { status: 403 }); } }
