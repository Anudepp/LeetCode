class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}

// Example usage:
const calculator = new Calculator();
const result = calculator.add(5).multiply(2).subtract(3).getResult(); 
console.log(result); // Output: 7