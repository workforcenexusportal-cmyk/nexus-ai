import { getTenantContext } from "@/lib/backend";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { const context = getTenantContext(request); return Response.json({ data: [{ id: "notice-1", tenantId: context.tenantId, type: "system", title: "Control plane ready", message: "Create your first workflow to begin.", read: false, createdAt: new Date().toISOString() }] }); }
