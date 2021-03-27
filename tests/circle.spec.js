const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(typeof circle(1), 'object');
    assert.strictEqual(Object.keys(circle(1)).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.strictEqual(circle(2).circumference, 3.14 * 4);
    assert.strictEqual(circle(3).area, 3.14 * 3 * 3);
    let circleTest = {
      radius: 3,
      area: 3.14 * 3 * 3,
      circumference: 2 * 3.14 * 3,
    };
    assert.deepStrictEqual(Object.entries(circle(3)), Object.entries(circleTest));
  });
});
