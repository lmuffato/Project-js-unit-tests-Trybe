/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

const parse = (num) => parseFloat(num).toFixed(2);
describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.strictEqual(typeof circle(1), 'object');
    assert.strictEqual(Object.keys(circle(2)).length, 3);
    assert.strictEqual(typeof circle(), 'undefined');
    assert.strictEqual(parse(circle(2).circumference), parse(12.56));
    assert.strictEqual(parse(circle(3).area), parse(28.26));
    assert.deepStrictEqual(Object.keys(circle(3)), ['radius', 'area', 'circumference']);
    assert.deepStrictEqual(Object.values(circle(3))
      .map((e) => parse(e)), [3, 28.26, 18.84].map((e) => parse(e)));
  });
});
