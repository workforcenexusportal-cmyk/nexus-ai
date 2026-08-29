import { listAgents } from "@/lib/backend";
import { sessionContext } from "@/lib/auth";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return Response.json({ data: await listAgents(await sessionContext(request)) }); }
