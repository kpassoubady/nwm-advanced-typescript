export {}

class Calculator {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  add(num: number): this {
    this._value += num;
    return this;
  }

  multiply(num: number): this {
    this._value *= num;
    return this;
  }

  get value(): number {
    return this._value;
  }
}

const result = new Calculator(2)
  .add(3)
  .multiply(2)
  .value; // Result: (2 + 3) * 2 = 10
console.log(result);
