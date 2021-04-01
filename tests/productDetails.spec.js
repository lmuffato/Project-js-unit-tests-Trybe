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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Array.isArray() consultado na documentação do MDN
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    const products = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(products), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const isItem1Obj = typeof products[0] === 'object';
    const isItem2Obj = typeof products[1] === 'object';

    assert.strictEqual(isItem1Obj && isItem2Obj, true);

    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(products[0] !== products[1], true);

    // (Difícil) Teste que os dois productIds terminam com 123.
    const splicedProductId1 = [...products[0].details.productId].splice(-3);
    const splicedProductId2 = [...products[1].details.productId].splice(-3);

    assert.deepStrictEqual(splicedProductId1, ['1', '2', '3']);
    assert.deepStrictEqual(splicedProductId2, ['1', '2', '3']);
  });
});
