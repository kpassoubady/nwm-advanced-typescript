const { log } = console;

console.log = (...args) => {
  const timestamp = new Date().toLocaleTimeString();
  log(`${timestamp} -`, ...args);
};

const resolvedPromise1: Promise<number> = Promise.resolve(1008);

resolvedPromise1.then((result) => {
  console.log(result); // Output: 1008
});

const existingPromise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello, Kangs!');
  }, 2000); // 2 secs delay
});



const resolvedPromise2: Promise<string> = Promise.resolve(existingPromise);

resolvedPromise2.then((result) => {
  console.log(result); // Output: Hello, Kangs!
});

existingPromise.then((msg) => {
  console.log(msg); // Output: Hello, Kangs!
})
  

resolvedPromise2
    .then((result) => {
        console.log(result); // Output: Hello, Kangs!
    })
    .then((msg) => {
        console.log(msg); // Output: undefined
    })
    .then((msg) => {
        console.log(msg); // Output: undefined
    });