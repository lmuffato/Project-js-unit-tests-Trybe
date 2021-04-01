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
    const productDetails1 = productDetails('laranja', 'mamão');
    /** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray */
    assert.strictEqual(Array.isArray(productDetails1), true);
    assert.strictEqual(productDetails1.length, 2);
    assert.strictEqual(typeof (productDetails1[0]), 'object');
    assert.strictEqual(typeof (productDetails1[1]), 'object');
    assert.notDeepStrictEqual(productDetails1[0], productDetails1[1]);
    /** Source: https://nodejs.org/api/assert.html#assert_assert_match_string_regexp_message */
    assert.match(productDetails1[0].details.productId, /123/);
    assert.match(productDetails1[1].details.productId, /123/);
  });
});
