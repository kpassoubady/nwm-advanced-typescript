export {};
// Example: Singleton for managing application settings

class AppSettings {
  private static instance: AppSettings;
  private settings: { [key: string]: string };

  private constructor() {
      this.settings = {};
  }

  static getInstance(): AppSettings {
      if (!AppSettings.instance) {
          AppSettings.instance = new AppSettings();
      }
      return AppSettings.instance;
  }

  setSetting(key: string, value: string): void {
      this.settings[key] = value;
  }

  getSetting(key: string): string | undefined {
      return this.settings[key];
  }
}

// Usage example:
const settingsInstance1 = AppSettings.getInstance();
settingsInstance1.setSetting('theme', 'dark');

const settingsInstance2 = AppSettings.getInstance();
console.log(settingsInstance2.getSetting('theme')); // Output: "dark"
