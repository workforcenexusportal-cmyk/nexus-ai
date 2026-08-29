import { getTenantContext, listAgents } from "@/lib/backend";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return Response.json({ data: listAgents(getTenantContext(request)) }); }
