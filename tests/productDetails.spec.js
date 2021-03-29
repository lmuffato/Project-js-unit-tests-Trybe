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
    // ESCREVA SEUS TESTES ABAIXO:
    const product = productDetails('mascara', 'alcool gel');
    assert.deepStrictEqual(product instanceof Array, true);
    assert.deepStrictEqual(product.length, 2);
    assert.deepStrictEqual(typeof (product[0]), 'object');
    assert.deepStrictEqual(typeof (product[1]), 'object');
    const product1 = product[0];
    const product2 = product[1];
    assert.deepStrictEqual(product1 === product2, false);
    const product1Id = product1.details.productId;
    const product1IdLast3Words = product1Id.slice((product1Id.length - 3));
    const product2Id = product2.details.productId;
    const product2IdLast3Words = product2Id.slice((product2Id.length - 3));
    assert.strictEqual(product1IdLast3Words === product2IdLast3Words, true);
  });
});
