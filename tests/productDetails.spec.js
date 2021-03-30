/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    const callFunction = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(callFunction), true);
    assert.strictEqual(callFunction.length, 2);
    assert.ok(callFunction[0].toString() === '[object Object]'
    && callFunction[1].toString() === '[object Object]');
    // assert.notDeepStrictEqual(productDetails('Luva', 'Gel')[0], productDetails('Luva', 'Gel')[1]);
    // const end123First = productDetails()[0].details.productId;
    // const end123Second = productDetails()[0].details.productId;
    // assert.ok(end123First === 'undefined123' && end123Second === 'undefined123');
  });
});
