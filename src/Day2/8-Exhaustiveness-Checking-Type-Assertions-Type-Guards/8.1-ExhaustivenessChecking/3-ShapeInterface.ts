export { };

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log(area({ kind: "square", size: 5 })); // Output: 25
console.log(area({ kind: "rectangle", width: 10, height: 5 })); // Output: 50
console.log(area({ kind: "circle", radius: 2 })); // Output: 12.566370614359172
// console.log(area({ kind: "triangle", base: 5, height: 10 })); 
// Error: Argument of type '{ kind: "triangle"; base: number; height: number; }' is not assignable 
// to parameter of type 'Shape'. Object literal may only specify known properties, 
// and 'kind' does not exist in type 'Triangle'. Did you mean to write 'circle'?
