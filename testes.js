const assert = require('assert');

const circle = (radius) => {
  const PI = 3.14;
  if (!radius) { return undefined; }
  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};

assert.strictEqual(typeof circle(3), 'object');
assert.strictEqual(Object.keys(circle(3)).length, 3);
assert.strictEqual(circle(), undefined);
assert.strictEqual(circle(2).circumference, 12.56);
assert.strictEqual(circle(3).area.toPrecision(2), 28);
