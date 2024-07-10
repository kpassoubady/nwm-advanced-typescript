export {};

/*
Real-life situation: 
The EmailAuthenticator class implements Authenticator interface which contains methods for 
login, logout, and change password. However, in a real-life scenario, a user may authenticate 
using different methods like social media login or OTP verification. 
Implementing unnecessary methods for those authentication mechanisms would violate ISP
*/

// Example: Interface Segregation Principle (ISP) in a real-life scenario

interface Authenticator {
  login(username: string, password: string): boolean;
  logout(): void;
  changePassword(newPassword: string): boolean;
}

class EmailAuthenticator implements Authenticator {
  login(username: string, password: string): boolean {
      // Logic to authenticate user via email
      return true;
  }

  logout(): void {
      // Logic to logout user
  }

  changePassword(newPassword: string): boolean {
      // Logic to change password via email
      return true;
  }
}
