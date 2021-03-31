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
    assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    const prods = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(prods), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(prods.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof prods, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(prods[0].name !== prods[1].name, true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const cut = prods[0].details.productId.length;
    const numbers = prods[0].details.productId.slice(cut - 3, cut);
    const cut2 = prods[1].details.productId.length;
    const numbers2 = prods[1].details.productId.slice(cut2 - 3, cut2);
    assert.strictEqual(numbers, '123');
    assert.strictEqual(numbers2, '123');
  });
});
