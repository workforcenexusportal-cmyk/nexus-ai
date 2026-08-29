import NextAuth, { type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prismaClient } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },
  providers: [Credentials({ name: "Workspace", credentials: { email: { label: "Email", type: "email" }, tenantId: { label: "Workspace ID", type: "text" } }, async authorize(credentials) { const email = typeof credentials?.email === "string" ? credentials.email.trim().toLowerCase() : ""; const tenantId = typeof credentials?.tenantId === "string" ? credentials.tenantId.trim() : ""; if (!email || !tenantId) return null; const client = await prismaClient(); if (client) { const user = await client.user.findFirst({ where: { email, tenantId } }); if (user) return { id: user.id, email: user.email, name: user.name, tenantId, role: user.role.toLowerCase() }; } if (process.env.NODE_ENV !== "production" && email === "owner@nexus.local" && tenantId === "demo") return { id: "demo-owner", email, name: "Workspace Owner", tenantId, role: "owner" }; return null; } })],
  callbacks: { async jwt({ token, user }) { if (user) { token.tenantId = (user as typeof user & { tenantId?: string }).tenantId; token.role = (user as typeof user & { role?: string }).role; } return token; }, async session({ session, token }) { const user = session.user as typeof session.user & { id: string; tenantId?: string; role?: string }; user.id = token.sub ?? ""; user.tenantId = token.tenantId as string | undefined; user.role = token.role as string | undefined; return session; } },
  pages: { signIn: "/login" },
};

export default NextAuth(authOptions);
