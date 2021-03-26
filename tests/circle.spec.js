/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.strictEqual(typeof circle(1), 'object');

    assert.strictEqual(Object.keys(circle(1)).length, 3);

    assert.strictEqual(circle(), undefined);

    assert.strictEqual(circle(2).circumference, 12.56);

    assert.strictEqual(parseFloat((circle(3).area).toPrecision(4)), 28.26);

    const precisionCircle = circle(3);
    precisionCircle.area = parseFloat((circle(3).area).toPrecision(4));
    assert.deepStrictEqual(precisionCircle, { radius: 3, area: 28.26, circumference: 18.84 });
  });
});
