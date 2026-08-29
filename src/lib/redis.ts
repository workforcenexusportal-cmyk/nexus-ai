import Redis from "ioredis";
let client: Redis | null | undefined;
export function redisClient() { if (client !== undefined) return client; if (!process.env.REDIS_URL) { client = null; return client; } client = new Redis(process.env.REDIS_URL, { lazyConnect: true, maxRetriesPerRequest: 1, enableOfflineQueue: false }); return client; }
export async function durableRateLimit(key: string, limit = 60, windowSeconds = 60) { const redis = redisClient(); if (!redis) return true; try { const bucket = `nexus:rate:${key}`; const count = await redis.incr(bucket); if (count === 1) await redis.expire(bucket, windowSeconds); return count <= limit; } catch { return true; } }
