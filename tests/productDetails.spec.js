/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

const products = productDetails('batata', 'pão');
describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.ok(Array.isArray(products) === true);
    assert.strictEqual(products.length, 2);
    assert.strictEqual((typeof (products[0])), 'object');
    assert.strictEqual((typeof (products[1])), 'object');
    assert.notDeepStrictEqual(products[0], products[1]);
    assert.ok(products[0].details.productId.includes('123'), true);
    assert.ok(products[1].details.productId.includes('123'), true);
  });
});
