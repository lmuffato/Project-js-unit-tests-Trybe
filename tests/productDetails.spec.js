const assert = require('assert');

const productDetails = require('../src/productDetails');

const funcFull = (productDetails('Álcool gel', 'Máscara'));

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(funcFull), true);
    assert.strictEqual(funcFull.length, 2);
    assert.strictEqual(typeof (funcFull[0]) && typeof (funcFull[1]), 'object');
    assert.strictEqual(funcFull[0] !== funcFull[1]);
    assert.strictEqual(funcFull[0].slice(-3) && funcFull[1].slice(-3), '123');
  });
});
