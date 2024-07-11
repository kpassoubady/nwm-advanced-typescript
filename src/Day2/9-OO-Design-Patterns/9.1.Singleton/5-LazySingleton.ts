export {}

// Lazy initialization ensures that the Singleton instance is created only when needed.
// This is useful when the Singleton object is resource-intensive to create or when the object is not always needed.
class LazySingleton {
  private static instance: LazySingleton | null = null;

  private constructor() {}

  static getInstance(): LazySingleton {
      if (!LazySingleton.instance) {
          LazySingleton.instance = new LazySingleton();
      }
      return LazySingleton.instance;
  }
}

// Usage:
const instance1 = LazySingleton.getInstance();
const instance2 = LazySingleton.getInstance();
console.log(instance1 === instance2);
