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
    assert.strictEqual(typeof (productDetails('tabaco', 'seda')), 'object');
    assert.strictEqual(productDetails('tabaco', 'seda').length, 2);
    assert.strictEqual(typeof productDetails('tabaco', 'seda')[0], 'object');
    assert.strictEqual(typeof productDetails('tabaco', 'seda')[1], 'object');
    assert.notStrictEqual(productDetails('tabaco', 'seda')[0], productDetails('tabaco', 'seda')[1]);
    assert.strictEqual(productDetails('tabaco', 'seda')[0].details.productId, `${'tabaco'}123`);
    assert.strictEqual(productDetails('tabaco', 'seda')[1].details.productId, `${'seda'}123`);
  });
});
