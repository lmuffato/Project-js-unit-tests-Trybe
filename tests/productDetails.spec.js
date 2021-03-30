/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.strictEqual(typeof (productDetails('Água sanitária', 'Máscara')[0]) && productDetails('Água sanitária', 'Máscara')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
