export {};

// Example: Implementing a caching mechanism using Singleton pattern for an in-memory cache

// Define the data structure for cache items
interface CacheItem {
  key: string;
  value: any;
  expirationTime: number;
}

class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, CacheItem>;

  private constructor() {
      this.cache = new Map();
  }

  static getInstance(): CacheManager {
      if (!CacheManager.instance) {
          CacheManager.instance = new CacheManager();
      }
      return CacheManager.instance;
  }

  // Method to add an item to the cache
  addItem(key: string, value: any, expirationTimeInMs: number): void {
      const expirationTime = Date.now() + expirationTimeInMs;
      const cacheItem: CacheItem = { key, value, expirationTime };
      this.cache.set(key, cacheItem);
  }

  // Method to retrieve an item from the cache
  getItem(key: string): any | undefined {
      const cacheItem = this.cache.get(key);
      if (cacheItem && cacheItem.expirationTime > Date.now()) {
          return cacheItem.value;
      } else {
          // Remove expired cache item
          this.cache.delete(key);
          return undefined;
      }
  }
}

// Usage:
const cache = CacheManager.getInstance();

// Adding data to the cache
cache.addItem("user:1", { id: 1, name: "Alice" }, 30000); // Cache for 30 seconds
cache.addItem("user:2", { id: 2, name: "Bob" }, 60000); // Cache for 1 minute

// Retrieving data from the cache
console.log(cache.getItem("user:1")); // Output: { id: 1, name: 'Alice' }
console.log(cache.getItem("user:2")); // Output: { id: 2, name: 'Bob' }

// Wait for cache expiration
setTimeout(() => {
  console.log(cache.getItem("user:1")); // Output: undefined (Cache expired)
}, 35000);

