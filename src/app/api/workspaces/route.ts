import { getTenantContext, listAuditEvents, listLeads } from "@/lib/backend";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { const context = getTenantContext(request); const events = listAuditEvents(context); const leads = listLeads(context); return Response.json({ data: { tenantId: context.tenantId, metrics: { leads: leads.length, auditEvents: events.length, uptime: 99.99 }, agents: [{ name: "Procurement Copilot", status: "running" }, { name: "Quality Inspector", status: "running" }, { name: "Maintenance Analyst", status: "review" }] } }); }
