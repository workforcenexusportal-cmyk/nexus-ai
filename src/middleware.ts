import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) { const response = NextResponse.next(); const requestId = request.headers.get("x-request-id") ?? crypto.randomUUID(); response.headers.set("x-request-id", requestId); if (request.nextUrl.pathname.startsWith("/client-portal") && request.nextUrl.pathname !== "/client-portal") response.headers.set("x-portal-auth", "required-in-production"); return response; }
export const config = { matcher: ["/api/:path*", "/client-portal/:path*"] };
