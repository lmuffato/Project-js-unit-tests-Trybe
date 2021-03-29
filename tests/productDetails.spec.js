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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.

    // Para o teste a seguir, consultei o seguinte link:
    // developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    assert.strictEqual(Array.isArray(productDetails()), true);
    const array = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(array.length, 2);
    assert.strictEqual(typeof array, 'object');
    // Para o teste a seguir consultei o pull request do Lucas Pedroso, turma 10 A.
    assert.notDeepStrictEqual(array[0] !== array[1], 'true');
    // Para o teste a seguir consultei o seguinte link:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    assert.strictEqual(
      array[0].details.productId.slice(-3), array[1].details.productId.slice(-3), '123',
    );
  });
});
