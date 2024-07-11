export {};

interface Functor<F> {
  map<A, B>(fa: F, f: (a: A) => B): F;
}

class ArrayFunctor implements Functor<Array<any>> {
  map<A, B>(fa: Array<A>, f: (a: A) => B): Array<B> {
      return fa.map(f);
  }
}

const arrayFunctor = new ArrayFunctor();
const result = arrayFunctor.map([1, 2, 3], x => x * 2); // [2, 4, 6]
console.log(result);