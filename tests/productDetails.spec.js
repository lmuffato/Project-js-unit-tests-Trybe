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
    const retorno = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof (retorno), 'object'); // todo array é um obejto
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(retorno).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (Object.keys(retorno)), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(Object.entries(retorno)[0], Object.entries(retorno)[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const valor1 = Object.values(retorno)[0].details.productId;
    const valor2 = Object.values(retorno)[1].details.productId;
    assert.strictEqual(valor2.substring(valor2.length - 3, valor2.length), '123');
    assert.strictEqual(valor1.substring(valor1.length - 3, valor1.length), '123');
  });
});

//  para o ultimo reqisito usei a substring() desse link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring
