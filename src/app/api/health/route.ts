export const dynamic = "force-dynamic";
export async function GET() { return Response.json({ status: "ok", service: "nexus-web", version: "0.1.0", timestamp: new Date().toISOString() }); }
