export { };

function clone<T>(source: T): T {
  let cloneObject = {} as T;
  for (let key in source) {
    cloneObject[key] = source[key];
  }
  return cloneObject;
}

let obj1 = { name: "John", age: 30 };
let obj2 = clone(obj1);
console.log(obj2); // { name: "John", age: 30 }
