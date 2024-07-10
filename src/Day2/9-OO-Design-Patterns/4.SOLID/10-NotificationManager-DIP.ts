export {};

// Example: Dependency Inversion Principle (DIP) in a real-life scenario
// - High-level modules should not depend on low-level modules. Both should depend on abstractions.
// - Abstractions should not depend on details. Details should depend on abstractions.
// - In simple terms, high-level modules should not depend on low-level modules. Both should depend on abstractions.
// - The NotificationManager class depends on the NotificationService interface, not on concrete implementations like EmailNotificationService or SMSNotificationService. 
// - This allows the NotificationManager class to work with any type of notification service without being tightly coupled to specific implementations.
// - The NotificationService interface defines a contract for sending notifications, which can be implemented by different notification services like email, SMS, or push notifications.
// - The EmailNotificationService and SMSNotificationService classes implement the NotificationService interface and provide concrete implementations for sending email and SMS notifications.
// - The NotificationManager class takes a NotificationService object as a dependency in its constructor and uses it to send notifications.
// - This design follows the Dependency Inversion Principle by inverting the dependency between the high-level NotificationManager class and the low-level notification services. 
// - The high-level class depends on an abstraction (NotificationService interface) rather than concrete implementations, making it more flexible and easier to extend.
// - The NotificationManager class is decoupled from specific notification services, allowing it to work with any notification service that implements the NotificationService interface.
interface NotificationService {
  sendNotification(email: string, message: string): void;
}

class EmailNotificationService implements NotificationService {
  sendNotification(email: string, message: string): void {
      // Logic to send email notification
      console.log(`Email sent to ${email}: ${message}`);
  }
}

class SMSNotificationService implements NotificationService {
  sendNotification(phoneNumber: string, message: string): void {
      // Logic to send SMS notification
      console.log(`SMS sent to ${phoneNumber}: ${message}`);
  }
}

class NotificationManager {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
      this.notificationService = notificationService;
  }

  sendNotification(recipient: string, message: string): void {
      this.notificationService.sendNotification(recipient, message);
  }
}

// Usage:
const emailNotificationService = new EmailNotificationService();
const smsNotificationService = new SMSNotificationService();

const emailNotificationManager = new NotificationManager(emailNotificationService);
const smsNotificationManager = new NotificationManager(smsNotificationService);

emailNotificationManager.sendNotification("john@example.com", "Welcome to our platform!");
smsNotificationManager.sendNotification("+1234567890", "Your order has been shipped!");
