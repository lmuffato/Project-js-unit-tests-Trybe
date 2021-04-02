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
    assert.strictEqual(typeof productDetails, 'function');
    // Teste que o array retornado pela função contém dois itens dentro.
    const produtos = productDetails('firstProduct', 'secondProduct');
    assert.strictEqual(produtos.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('firstProduct', 'secondProduct'), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const id1 = produtos[0].details.productId;
    const id2 = produtos[1].details.productId;
    assert.notStrictEqual(id1, id2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    // Aprendi em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    const novoid1 = produtos[0].details.productId.substr(-3);
    const novoid2 = produtos[1].details.productId.substr(-3);
    assert.deepStrictEqual(novoid1, novoid2);
  });
});
