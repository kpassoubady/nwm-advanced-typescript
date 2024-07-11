class Employee {
    private name: string;
    constructor(name: string) { this.name = name; }
    getName(): string { return this.name; }
    getNameAsync = async (fail: boolean): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            resolve(this.name);
            // setTimeout(
            //     () => fail ? reject("failed!!!") : resolve(this.name), 1000
            // );
        });
    };
}

const company: Employee[] = [new Employee("Aditi"), new Employee("Ivan"),new Employee("Kangs"), new Employee("Harshal"), new Employee("Alice"), new Employee("Alex")];
console.log("");
let personFound1 = company.find((person) => {
    console.log("Matching with: ", person);
    let result = person.getName().toUpperCase() === "ALICE";
    console.log("Match found: " + result + "\n");
    return result;
});
console.log("Looking for Alice. What did I find? Person found: ", personFound1);
console.log("====================")

console.log("");

// Find always return the first value when you use with promises
let expectedName = 'ALICE';
let personFound2 = company.find(async (person) => {
    console.log("Matching with: ", person);
    let resolved = person.getNameAsync(false).then((receivedName) => {
        console.log(`receivedName = ${receivedName}`);
        let result = receivedName.toUpperCase() === expectedName;
        console.log("Match found: " + result + "\n");
        return result;
    });
    const val = await resolved;
    return val;
});
// will not return desired result, as the find method in array does not support async or promises
console.log("Looking for Alice. What did I find? personFound2: ", personFound2);
console.log("====================")

// The result is not yet resolved.. still the promise is pending 
for (const staff of company) {
    const result = staff.getNameAsync(false);
    console.log(result);
}

Promise.allSettled(company).then((results) => results.forEach((result) => console.log(result.status)));

console.log("%%%%%%%%%%%%%%%%%%%%%%")

let personFound3 = (async function () {
    for (const staff of company) {
        // resolve promises one by one approach
        const result = await staff.getNameAsync(false).then((val) => { return val });
        console.log("Within async 1:" + result);
        if (result.toUpperCase() === expectedName) {
            console.log("Found expected value async 1: " + expectedName);
            return staff;
        }
    }
})();

(async function () {
    console.log("+++++++++++++++++++++++")
    console.log("Looking for Alice. What did I find? personFound3: ", await personFound3.then((val) => { return val }));
})();

let personFound4 = (async function () {
    // resolve all promises
    let resolved = await Promise.all(company);
    console.log("resolved:" + resolved);
    for (const staff of resolved) {
        const result = await staff.getNameAsync(false);
        console.log("Within async 2:" + result);
        if (result.toUpperCase() === expectedName) {
            console.log("Found expected value async 2: " + expectedName);
            return staff;
        }
    }
})();

(async function () {
    console.log("**************")
    console.log("Looking for Alice. What did I find? personFound4: ", await personFound4.then((val) => { return val }));
})();

Promise.allSettled(company).then((results) => results.forEach((result) => console.log(result.status)));

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

sleep(4000);
export { };

