export const dynamic = "force-dynamic";
export async function POST(request: Request) { const payload = await request.json().catch(() => null); return Response.json({ received: true, eventCount: Array.isArray(payload) ? payload.length : 1, message: "Validate HubSpot signatures and persist events in production." }); }
