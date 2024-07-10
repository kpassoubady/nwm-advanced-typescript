export {}

interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }

    getArea() {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(private radius: number) { }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

function logArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        console.log(`Rectangle area: ${shape.getArea()}`);
    } else if (shape instanceof Circle) {
        console.log(`Circle area: ${shape.getArea()}`);
    } else {
        console.log("Invalid shape.");
    }
}

let circle1 = new Circle(5);
logArea(circle1);

let rectangle1 = new Rectangle(5,6);
logArea(rectangle1);
