// Real-life situation using Singleton pattern for managing application configuration
interface AppConfig {
  apiUrl: string;
  apiKey: string;
  // Other configuration properties
}

class ConfigurationManager {
  private static instance: ConfigurationManager;
  private config: AppConfig;

  private constructor() {
      // Initialize configuration properties
      this.config = {
          apiUrl: "https://api.example.com",
          apiKey: "secretapikey123"
      };
  }

  static getInstance(): ConfigurationManager {
      if (!ConfigurationManager.instance) {
          ConfigurationManager.instance = new ConfigurationManager();
      }
      return ConfigurationManager.instance;
  }

  getConfig(): AppConfig {
      return this.config;
  }
}

// Usage:
const configManager1 = ConfigurationManager.getInstance();
const configManager2 = ConfigurationManager.getInstance();

console.log(configManager1 === configManager2); // Output: true (Both instances refer to the same object)

const appConfig = configManager1.getConfig();
console.log(appConfig.apiUrl); // Output: https://api.example.com
console.log(appConfig.apiKey); // Output: secretapikey123
