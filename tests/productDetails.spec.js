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
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual((productDetails('mascara', 'alcool gel')) instanceof Array, true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('mascara', 'alcool gel').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof(productDetails('mascara', 'alcool gel')[0]), 'object');
    assert.deepStrictEqual(typeof(productDetails('mascara', 'alcool gel')[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const product1 = productDetails('mascara', 'alcool gel')[0];
    const product2 = productDetails('mascara', 'alcool gel')[1];
    assert.deepStrictEqual(product1 === product2, false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const product1Id = product1.details.productId;
    const product1IdLast3Words = product1Id.slice((product1Id.length - 3));
    const product2Id = product2.details.productId;
    const product2IdLast3Words = product2Id.slice((product1Id.length - 3));
    assert.deepStrictEqual(product1IdLast3Words === product1IdLast3Words, true)

  });
});
