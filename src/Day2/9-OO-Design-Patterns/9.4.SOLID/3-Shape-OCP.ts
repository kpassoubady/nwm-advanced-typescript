export {};
/*
The Open/Closed Principle states that a class should be open for extension but closed for modification.
*/

/* 
The Shape interface and its implementations (Rectangle and Circle) are open for extension
 by allowing new shapes to be added without modifying the existing code
*/

// Example: Open/Closed Principle (OCP)
interface Shape {
  calculateArea(): number;
  //calculatePerimeter(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
      return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
      return Math.PI * this.radius * this.radius;
  }
}
