/* eslint-disable max-len*/
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
    assert.strictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(productDetails().length, 2);
    assert.strictEqual(typeof productDetails(), 'object');
    const produtcs = productDetails('Alcool gel', 'Máscara');
    assert.notStrictEqual(produtcs[0],produtcs[1]);
    assert.strictEqual(produtcs[0].details.productId.slice(-3) && produtcs[1].details.productId.slice(-3), '123');

    });
});
