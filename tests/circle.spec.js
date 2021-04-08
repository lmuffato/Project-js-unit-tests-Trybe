/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

const obj = { radius: 3, area: (3.14 * 3 * 3), circumference: 18.84 };

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.deepStrictEqual(Object.keys(circle(4)).length, 3);
    assert.deepStrictEqual(circle(), undefined);
    assert.deepStrictEqual(circle(2).radius, 2);
    assert.deepStrictEqual(parseFloat((circle(3).area).toPrecision(2)), 28);
    assert.deepStrictEqual(circle(3), obj);
  });
});
