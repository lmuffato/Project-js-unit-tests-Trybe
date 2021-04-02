const calculator = {
  add: (x, y) => x + y,
  mult: (x, y) => Math.ceil(x * y),
  div: (x, y) => Math.floor(x / y),
  sub: (x, y) => x - y,
};
module.exports = calculator;
