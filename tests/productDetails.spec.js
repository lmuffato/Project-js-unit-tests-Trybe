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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
    const qtdValores = productDetails('Alcool gel', 'Mascara');
    const obj1 = Object.values(qtdValores[0].details);
    const obj2 = Object.values(qtdValores[1].details);
    const objet1 = obj1[0].substr(-3);
    const objet2 = obj2[0].substr(-3);
    assert.strictEqual(typeof (productDetails), 'function');
    assert.strictEqual(qtdValores.length, 2);
    assert.deepStrictEqual(typeof (qtdValores[0]) === 'object' && typeof (qtdValores[1]) === 'object', true);
    assert.notDeepStrictEqual(qtdValores[0], qtdValores[1]);
    assert.strictEqual(objet1 === objet2, true);
  });
});
