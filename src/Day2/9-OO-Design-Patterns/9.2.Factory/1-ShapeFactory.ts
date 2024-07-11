// Implementing a Factory pattern for Shape
interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
      console.log("Drawing a circle");
  }
}

class Square implements Shape {
  draw() {
      console.log("Drawing a square");
  }
}

class ShapeFactory {
  createShape(type: string): Shape {
      switch (type) {
          case "circle":
              return new Circle();
          case "square":
              return new Square();
          default:
              throw new Error("Invalid shape type");
      }
  }
}

// Usage:
const factory = new ShapeFactory();
const circle = factory.createShape("circle");
circle.draw(); // Output: Drawing a circle

const square = factory.createShape("square");
square.draw(); // Output: Drawing a square
