import { getTenantContext, listAgents, listAuditEvents, listLeads, listWorkflows } from "@/lib/backend";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { const context = getTenantContext(request); const [events, leads, agents, workflows] = await Promise.all([listAuditEvents(context), listLeads(context), listAgents(context), listWorkflows(context)]); return Response.json({ data: { tenantId: context.tenantId, metrics: { leads: leads.length, auditEvents: events.length, workflows: workflows.length, uptime: 99.99 }, agents } }); }
