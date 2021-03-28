/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.ok(Object.prototype.toString.call(productDetails()) === '[object Array]');
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.ok(Object.prototype.toString.call(productDetails()[0]) === '[object Object]'
    && Object.prototype.toString.call(productDetails()[1]) === '[object Object]');
    assert.notDeepStrictEqual(productDetails('Luva', 'Gel')[0], productDetails('Luva', 'Gel')[1]);
    const end123First = productDetails()[0].details.productId;
    const end123Second = productDetails()[0].details.productId;
    assert.ok(end123First === 'undefined123' && end123Second === 'undefined123');
  });
});
