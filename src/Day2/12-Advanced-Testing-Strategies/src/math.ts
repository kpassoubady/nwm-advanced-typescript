// export all the functions, variables and types from the module as named exports
// import all the functions, variables and types from the module as named imports
// import { Utils } from './array';

export module MathUtils {
  export const sum = (a: number, b: number): number => a + b;
  export const subtract = (a: number, b: number): number => a - b;
  export const multiply = (a: number, b: number): number => a * b;
  export const divide = (a: number, b: number): number => a / b;
  
  export const mod = (a: number, b: number): number => a % b;
  export const power = (a: number, b: number): number => a ** b;
  export const factorial = (n: number): number => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };
  export const isEven = (n: number): boolean => n % 2 === 0;
  export const isOdd = (n: number): boolean => n % 2 !== 0;
  export const isPositive = (n: number): boolean => n > 0;
  export const isNegative = (n: number): boolean => n < 0;
  export const isZero = (n: number): boolean => n === 0;
  export const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  export const isPalindrome = (n: number): boolean => {
    const str = n.toString();
    return str === str.split('').reverse().join('');
  };
  export const isPerfectSquare = (n: number): boolean => {
    if (n < 0) return false;
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
  };
  export const isArmstrong = (n: number): boolean => {
    const str = n.toString();
    const len = str.length;
    return n === str.split('').reduce((acc, digit) => acc + Number(digit) ** len, 0);
  }
  export const isPrimeFactors = (n: number, factors: number[]): boolean => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0 && !factors.includes(i)) return false;
    }
    return true;
  }
  export const isFibonacci = (n: number): boolean => {
    if (n < 0) return false;
    let a = 0, b = 1;
    while (b < n) {
      [a, b] = [b, a + b];
    }
    return b === n;
  }
  export const isPerfectNumber = (n: number): boolean => {
    if (n < 0) return false;
    let sum = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) sum += i;
    }
    return sum === n;
  }
  export const isHappyNumber = (n: number): boolean => {
    if (n < 0) return false;
    let sum = n;
    while (sum !== 1) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + Number(digit) ** 2, 0);
      if (sum === 4) return false;
    }
    return true;
  }
  export const isPerniciousNumber = (n: number): boolean => {
    if (n < 0) return false;
    let sum = 0;
    for (let i = 0; i < n.toString().length; i++) {
      if (n.toString()[i] === '1') sum += i + 1;
    }
    return sum === n;
  }
  export const isPerfectCube = (n: number): boolean => {
    const cube = Math.cbrt(n);
    return cube === Math.floor(cube);
  }
  export const PI = Math.PI;
}