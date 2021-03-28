/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.strictEqual(typeof circle(3), 'object');
    assert.strictEqual(Object.keys(circle(3)).length, 3);
    assert.strictEqual(typeof circle(), 'undefined');
    assert.strictEqual(circle(2).circumference, 12.56);
    assert.strictEqual(circle(3).area, 28.259999999999998);
    assert.deepStrictEqual(circle(3),
      {
        radius: 3,
        area: 28.259999999999998,
        circumference: 18.84,
      });
  });
});
