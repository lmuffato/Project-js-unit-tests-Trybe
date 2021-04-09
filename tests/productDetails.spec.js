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
    const objeto1 = {};
    const objeto2 = {};
    assert.strictEqual(Array.isArray(productDetails(objeto1, objeto2)), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails(objeto1, objeto2).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails(objeto1, objeto2)[0], 'object');
    assert.strictEqual(typeof productDetails(objeto1, objeto2)[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    const resp1 = productDetails(objeto1, objeto2)[0];
    const resp2 = productDetails(objeto1, objeto2)[1];
    assert.deepStrictEqual(resp1, resp2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const resposta1 = productDetails(objeto1, objeto2)[0];
    const resposta2 = productDetails(objeto1, objeto2)[1];
    const tresUltimasLetra1 = resposta1.details.productId.slice(-3);
    const tresUltimasLetra2 = resposta2.details.productId.slice(-3);
    assert.strictEqual(tresUltimasLetra1, tresUltimasLetra2);
  });
});
