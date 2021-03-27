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
    const products = productDetails('Brahma', 'Palheiro');

    assert.strictEqual(Array.isArray(products), true);
    assert.strictEqual(products.length, 2);
    assert.ok(typeof (products[0]) === 'object' && typeof (products[1]) === 'object');
    assert.ok(products[0] !== products[1]);
    assert.ok(() => {
      let finalProduct1Id = products[0].details.productId;
      let finalProduct2Id = products[1].details.productId;
      finalProduct1Id = finalProduct1Id.substr(finalProduct1Id.length - 3, finalProduct1Id.length);
      finalProduct2Id = finalProduct2Id.substr(finalProduct2Id.length - 3, finalProduct2Id.length);
      return finalProduct1Id === '123' && finalProduct2Id === '123';
    });
  });
});
