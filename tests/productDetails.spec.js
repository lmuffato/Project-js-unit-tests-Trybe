/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.ok(Object.prototype.toString.call(productDetails()) === '[object Array]');
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.ok(Object.prototype.toString.call(productDetails()[0]) === '[object Object]' && Object.prototype.toString.call(productDetails()[1]) === '[object Object]');
    assert.notDeepStrictEqual(productDetails('Álcool gel', 'Máscara')[0], productDetails('Álcool Gel', 'Máscara')[1]);
    assert.ok(productDetails()[0].details.productId === 'undefined123' && productDetails()[1].details.productId === 'undefined123');
  });
});
