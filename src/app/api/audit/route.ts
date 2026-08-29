import { listAuditEvents, requireRole } from "@/lib/backend";
import { sessionContext } from "@/lib/auth";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { try { const context = await sessionContext(request); if (!context.tenantId) return Response.json({ error: "UNAUTHENTICATED" }, { status: 401 }); requireRole(context, ["owner", "admin"]); return Response.json({ data: await listAuditEvents(context) }); } catch (error) { const message = error instanceof Error ? error.message : "FORBIDDEN"; return Response.json({ error: message }, { status: 403 }); } }
