export {};

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };
//  | { kind: "cube"; side: number;  };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

const circle: Shape = { kind: "circle", radius: 5};
const square: Shape = { kind: "square", size: 10 };
const rectangle: Shape = { kind: "rectangle", width: 4, height: 6 };

console.log(area(circle)); 
console.log(area(square)); 
console.log(area(rectangle)); 
