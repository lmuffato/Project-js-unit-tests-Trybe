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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const produtos = productDetails('produto 1', 'produto 2');
    assert.deepStrictEqual(typeof produtos, 'object') 
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(produtos.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof produtos[0], 'object')
    assert.deepStrictEqual(typeof produtos[1], 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(produtos[0], produtos[1])
    // (Difícil) Teste que os dois productIds terminam com 123.
    const produto1Id = produtos[0].details.productId;
    const produto2Id = produtos[1].details.productId;

    const lastThree1 = produto1Id.substring(produto1Id.length - 3, produto1Id.length);
    const lastThree2 = produto2Id.substring(produto2Id.length - 3, produto1Id.length);

    assert.strictEqual(lastThree1 === lastThree2, true);
  });
});
