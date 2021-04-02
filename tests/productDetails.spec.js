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
    const result = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof result.forEach, 'function');
    assert.strictEqual(result.length, 2);
    assert.strictEqual((typeof result[0] === 'object' && typeof result[1] === 'object'), true);
    assert.notDeepStrictEqual(result[0], result[1]);
    const t1 = result[0].details.productId;
    const t2 = result[1].details.productId;
    assert.strictEqual(t1.slice(-3) === '123' && t2.slice(-3) === '123', true);
  });
});
