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
// ESCREVA SEUS TESTES ABAIXO:
// Teste que o retorno da função é um array.
// Teste que o array retornado pela função contém dois itens dentro.
// Teste que os dois itens dentro do array retornado pela função são objetos.
// Teste que os dois objetos são diferentes entre si.
// (Difícil) Teste que os dois productIds terminam com 123.

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    const product = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(Object.keys(product).length, 2);
    assert.strictEqual(typeof (Object.keys(product)), 'object');
    const product1 = product[0];
    const product2 = product[1];
    assert.strictEqual(product1 === product2, false);
    const productId1 = product1.details.productId;
    const productId2 = product2.details.productId;
    const product1End = productId1.slice(productId1.length - 3);
    const product2End = productId2.slice(productId2.length - 3);
    assert.strictEqual(product1End === product2End, true);
  });
});
