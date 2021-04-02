const TYPE_NOT_INTEGER = 'Please use integers';
const sum = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw TypeError(TYPE_NOT_INTEGER);
  }
  return a + b;
};
const subtract = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw TypeError(TYPE_NOT_INTEGER);
  }
  return a - b;
};
const multiply = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw TypeError(TYPE_NOT_INTEGER);
  }
  return a * b;
};
const divide = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw TypeError(TYPE_NOT_INTEGER);
  }
  return Math.floor(a / b);
};

const calculator = {
  add: sum,
  sub: subtract,
  mult: multiply,
  div: divide,
};

module.exports = calculator;
