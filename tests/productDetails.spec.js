/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

const arrayProducts = productDetails('álcool gel', 'máscara');

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
    assert.ok(Array.isArray(arrayProducts) === true);
    assert.strictEqual(arrayProducts.length, 2);
    assert.strictEqual((typeof (arrayProducts[0])), 'object');
    assert.strictEqual((typeof (arrayProducts[1])), 'object');
    assert.notDeepStrictEqual(arrayProducts[0], arrayProducts[1]);
    assert.ok(arrayProducts[0].details.productId.includes('123'), true);
    assert.ok(arrayProducts[1].details.productId.includes('123'), true);
  });
});
