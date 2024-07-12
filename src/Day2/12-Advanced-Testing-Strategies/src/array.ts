export module ArrayUtils {
  export const sumArray = (arr: number[]): number => arr.reduce((acc, val) => acc + val, 0);
  export const multiplyArray = (arr: number[]): number => arr.reduce((acc, val) => acc * val, 1);
  export const minArray = (arr: number[]): number => Math.min(...arr);
  export const maxArray = (arr: number[]): number => Math.max(...arr);
  export const reverseArray = (arr: number[]): number[] => arr.reverse();
  export const removeDuplicateArray = (arr: number[]): number[] => Array.from(new Set(arr));
  export const removeDuplicateSet = (set: Set<number>): Set<number> => new Set(set);
}
