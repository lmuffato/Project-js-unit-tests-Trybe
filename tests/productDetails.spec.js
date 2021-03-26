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
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('pasta','papel')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('a','b').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(productDetails('a','b')[0] instanceof Object, true)
    assert.strictEqual(productDetails('a','b')[1] instanceof Object, true)
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('a','b')[1], productDetails('a','b')[0])
    // (Difícil) Teste que os dois productIds terminam com 123.
    const testFinal = (arr) => {
      let returned = true;
      for (let index = 0; index < arr.length; index += 1) {
        if (arr[index].details.productId.substring(arr[index].details.productId.length - 3,arr[index].details.productId.length) !== '123') {
          returned = false
        }
      }
      return returned;
    }
    assert.strictEqual(testFinal(productDetails('a','b')), true)
  });
});
