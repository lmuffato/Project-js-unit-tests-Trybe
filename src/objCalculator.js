const calculator = {
  add: (num1, num2) => num1 + num2,
  mult: (num1, num2) => num1 * num2,
  div: (num1, num2) => Math.trunc(num1 / num2),
  sub: (num1, num2) => num1 - num2,
};

module.exports = calculator;
