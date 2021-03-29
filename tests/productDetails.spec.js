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
    const paramArray = ['Alcool gel', 'Máscara'];
    assert.strictEqual(Array.isArray(productDetails(paramArray[0], paramArray[1])), true);
    assert.strictEqual(productDetails(paramArray[0], paramArray[1]).length, 2);

    const firstProduct = productDetails(paramArray[0], paramArray[1])[0];
    const secondProduct = productDetails(paramArray[0], paramArray[1])[1];
    assert.strictEqual(typeof (firstProduct) && typeof (secondProduct), 'object');
    assert.strictEqual(firstProduct !== secondProduct, true);

    const firstId = Number(productDetails(paramArray[0], paramArray[1])[0]
      .details.productId.slice(-3));
    const secondId = Number(productDetails(paramArray[0], paramArray[1])[1]
      .details.productId.slice(-3));
    assert.deepStrictEqual(firstId && secondId, 123);
  });
});
