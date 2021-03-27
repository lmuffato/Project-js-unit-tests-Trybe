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
    const param1 = 'Alcool gel';
    const param2 = 'Máscara';
    assert.strictEqual(typeof productDetails(param1, param2), 'object');
    assert.strictEqual(Object.entries([param1, param2]).length, 2);
    assert.strictEqual(typeof Object.entries([param1, param2]), 'object');
    assert.notStrictEqual(Object.entries(param1, param2)[0], Object.entries(param1, param2)[1]);
    const param3 = productDetails(param1, param2)[0].details.productId;
    const param4 = productDetails(param1, param2)[1].details.productId;
    const param5 = param3.substr(param1.length, 3);
    const param6 = param4.substr(param2.length, 3);
    assert.strictEqual(param5, param6);
  });
});
