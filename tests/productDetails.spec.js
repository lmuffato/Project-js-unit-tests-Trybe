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

const productWith123 = () => {
  const holder = productDetails('x', 'y');
  const match1 = holder[0].details.productId.match(/123/);
  const match2 = holder[1].details.productId.match(/123/);
  if (match1 && match2) { return true; }
  return false;
};

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    const holder = productDetails('x', 'y');
    const areObjectDifferent = productDetails('x', 'y')[0] !== productDetails('x', 'y')[1];
    assert.deepStrictEqual(typeof productDetails('x', 'y'), 'object');
    assert.deepStrictEqual(productDetails('x', 'y').length, 2);
    assert.deepStrictEqual(typeof Object.entries(holder), 'object');
    assert.deepStrictEqual(areObjectDifferent, true);
    assert.deepStrictEqual(productWith123(), true);
  });
});
