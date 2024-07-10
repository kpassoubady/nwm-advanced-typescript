// Implementing a Strategy pattern for sorting algorithms
interface SortingStrategy {
  sort(arr: number[]): number[];
}


// Bubble Sort iterates through the array and swaps adjacent elements 
// if they are in the wrong order until the entire array is sorted
class BubbleSort implements SortingStrategy {
  sort(arr: number[]): number[] {
      const len = arr.length;
      for (let i = 0; i < len - 1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
              if (arr[j] > arr[j + 1]) {
                  const temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
      return arr;
  }
}

// Quick Sort recursively divides the array into smaller sub-arrays based on a pivot element, 
// osorts each sub-array, and then merges them to produce the final sorted array.
class QuickSort implements SortingStrategy {
  sort(arr: number[]): number[] {
      if (arr.length <= 1) {
          return arr;
      }

      const pivot = arr[0];
      const leftArr: number[] = [];
      const rightArr: number[] = [];

      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < pivot) {
              leftArr.push(arr[i]);
          } else {
              rightArr.push(arr[i]);
          }
      }

      return [...this.sort(leftArr), pivot, ...this.sort(rightArr)];
  }
}

class Sorter {
  private strategy: SortingStrategy;

  constructor(strategy: SortingStrategy) {
      this.strategy = strategy;
  }

  setStrategy(strategy: SortingStrategy) {
      this.strategy = strategy;
  }

  sort(arr: number[]): number[] {
      return this.strategy.sort(arr);
  }
}

// Usage:
const arr = [3, 1, 5, 2, 4];
const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort(arr)); // Output: [1, 2, 3, 4, 5]

sorter.setStrategy(new QuickSort());
console.log(sorter.sort(arr)); // Output: [1, 2, 3, 4, 5]
