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
    const receivedProduct = productDetails('product', 'product2');
    assert.strictEqual(typeof (receivedProduct), 'object');

    assert.strictEqual(receivedProduct.length, 2);

    receivedProduct.forEach((product) => {
      assert.strictEqual(typeof (product), 'object');
    });

    assert.notDeepStrictEqual(receivedProduct[0], receivedProduct[1]);

    receivedProduct.forEach((product) => {
      assert.match(product.details.productId, /123$/);
    });
  });
});
