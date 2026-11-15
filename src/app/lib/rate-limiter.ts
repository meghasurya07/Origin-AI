/**
 * Production Sliding-Window Rate Limiter
 * Provides IP and subnet-based DDoS/abuse protection in serverless environments.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const ipMap = new Map<string, RateLimitRecord>();

// Cleanup stale entries every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStale(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  const threshold = now - windowMs;
  for (const [key, record] of ipMap.entries()) {
    record.timestamps = record.timestamps.filter((t) => t > threshold);
    if (record.timestamps.length === 0) {
      ipMap.delete(key);
    }
  }
}

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  retryAfterSeconds: number;
}

/**
 * Checks whether an incoming IP is within the rate limit.
 * Default: 6 requests per 5 minutes per IP.
 */
export function checkRateLimit(
  ip: string,
  limit: number = 6,
  windowMs: number = 5 * 60 * 1000
): RateLimitResult {
  const cleanIp = ip ? ip.trim() : "unknown_ip";
  const now = Date.now();
  const windowStart = now - windowMs;

  cleanupStale(windowMs);

  let record = ipMap.get(cleanIp);
  if (!record) {
    record = { timestamps: [] };
    ipMap.set(cleanIp, record);
  }

  // Filter out timestamps outside the active sliding window
  record.timestamps = record.timestamps.filter((t) => t > windowStart);

  if (record.timestamps.length >= limit) {
    const oldest = record.timestamps[0];
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((oldest + windowMs - now) / 1000)
    );
    return {
      allowed: false,
      limit,
      remaining: 0,
      retryAfterSeconds,
    };
  }

  // Record this attempt
  record.timestamps.push(now);

  return {
    allowed: true,
    limit,
    remaining: Math.max(0, limit - record.timestamps.length),
    retryAfterSeconds: 0,
  };
}
