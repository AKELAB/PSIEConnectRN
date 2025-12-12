import pThrottle from 'p-throttle';

// Rate limiting: 5 requêtes max par minute
const throttle = pThrottle({
  limit: 5,
  interval: 60000, // 1 minute
});

// Wrapper pour throttler les fonctions async
export const createThrottledFunction = <T extends (...args: any[]) => Promise<any>>(
  fn: T
): T => {
  return throttle(fn) as T;
};

// Cache simple pour réduire les appels répétés
class SimpleCache<T> {
  private cache = new Map<string, { data: T; timestamp: number }>();
  private ttl: number; // Time to live in ms

  constructor(ttlMinutes: number = 60) {
    this.ttl = ttlMinutes * 60 * 1000;
  }

  set(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const age = Date.now() - entry.timestamp;
    if (age > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const geminiCache = new SimpleCache(60); // 60 minutes TTL
