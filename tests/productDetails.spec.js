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
    assert.strictEqual(Array.isArray(productDetails('produto1', 'produto2')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('prod1', 'prod2').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const product1 = productDetails('prod1', 'prod2')[0];
    const product2 = productDetails('prod1', 'prod2')[1];
    assert.ok(Object.keys(product1).length >= 1 && Object.keys(product2).length >= 1, 'Elementos dentro da array não são objetos!');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(product1, product2, 'Os objetos não são diferentes entre si');
    // (Difícil) Teste que os dois productIds terminam com 123.
    const productId1 = product1.details.productId;
    const productId2 = product2.details.productId;
    assert.ok(productId1.slice(productId1.length - 3, productId1.length) === '123' && productId2.slice(productId2.length - 3, productId2.length) === '123', 'Diferentes de 123');
  });
});
