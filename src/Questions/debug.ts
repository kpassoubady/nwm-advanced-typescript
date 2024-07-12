// node --inspect build/src/Questions/debug.js
// node --inspect-brk build/src/Questions/debug.js  -- attach debugger

for (let i = 0; i < 5; i++) {
  console.log(`Iteration: ${i}`);
}


const array = [10, 20, 30, 40];
for (const value of array) {
  console.log(`Value: ${value}`);
}


const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
  console.log(`Index: ${index}, Number: ${number}`);
});

const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(`Key: ${key}, Value: ${object[key as keyof typeof object]}`);
  }
}
