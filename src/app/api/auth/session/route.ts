import { getTenantContext } from "@/lib/backend";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { const context = getTenantContext(request); return Response.json({ data: { authenticated: Boolean(request.headers.get("authorization") || request.headers.get("cookie")), user: { id: context.userId, roles: context.roles }, tenant: { id: context.tenantId }, provider: process.env.AUTH_SECRET ? "configured" : "development-fallback" } }); }
