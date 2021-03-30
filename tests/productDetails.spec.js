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
    assert.strictEqual(Object.entries(productDetails('Alcool gel', 'Mascara')).length, 2);
    const value = productDetails();
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof value[0] === 'object' && typeof value[1] === 'object', true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(value[0] && value[1], true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    // Visto no codigo do Murilo Gonçalves.
    const details1 = value[0].details.productId;
    const details2 = value[1].details.productId;
    const product1 = details1.substr(-3);
    const product2 = details2.substr(-3);
    assert.deepStrictEqual(product1 === product2, true);
  });
});
