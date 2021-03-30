/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.strictEqual(typeof (productDetails('Álcool gel', 'Máscara')[0]) 
    && productDetails('Água sanitária', 'Máscara')[1], 'object');
    assert.strictEqual(productDetails('Álcool gel', 'Máscara')[0] 
    !== productDetails('Álcool gel', 'Máscara')[1]);
    assert.strictEqual(productDetails('Álcool gel', 'Máscara')[0].slice(-3)
    && productDetails('Álcool gel', 'Máscara')[1].slice(-3), '123');
  });
});
