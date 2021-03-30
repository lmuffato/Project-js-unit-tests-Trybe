/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    const products = productDetails('Creme de cabelo', 'Creme dental');

    assert.strictEqual(Array.isArray(products), true);
    assert.strictEqual(products.length, 2);
    assert.strictEqual(typeof products[0], 'object');
    assert.strictEqual(typeof products[1], 'object');
    assert.notDeepStrictEqual(products[0], products[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const id1 = products[0].details.productId;
    const id2 = products[1].details.productId;
    assert.strictEqual(id1.slice(-3), '123');
    assert.strictEqual(id2.slice(-3), '123');
  });
});
