type PrismaClientLike = { $disconnect: () => Promise<void>; tenant: { upsert: (input: unknown) => Promise<{ id: string }> }; user: { findFirst: (input: unknown) => Promise<{ id: string; email: string; name: string; role: string } | null> }; lead: { findMany: (input: unknown) => Promise<unknown[]>; create: (input: unknown) => Promise<{ id: string; score: number; source: string }> }; workflow: { findMany: (input: unknown) => Promise<unknown[]>; create: (input: unknown) => Promise<{ id: string }> }; agent: { findMany: (input: unknown) => Promise<unknown[]> }; auditEvent: { findMany: (input: unknown) => Promise<unknown[]>; create: (input: unknown) => Promise<unknown> }; usageEvent?: { findMany: (input: unknown) => Promise<unknown[]>; create: (input: unknown) => Promise<unknown> } };
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClientLike };
export async function prismaClient() {
  if (!process.env.DATABASE_URL) return null;
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  try {
    const prismaModule = await import("@prisma/client");
    const PrismaClient = (prismaModule as unknown as { PrismaClient?: new () => PrismaClientLike; default?: { PrismaClient?: new () => PrismaClientLike } }).PrismaClient ?? (prismaModule as unknown as { default?: { PrismaClient?: new () => PrismaClientLike } }).default?.PrismaClient;
    if (!PrismaClient) return null;
    const client = new PrismaClient();
    if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
    return client;
  } catch { return null; }
}
