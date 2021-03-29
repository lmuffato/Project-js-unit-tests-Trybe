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
    const par1 = 'Alcool gel';
    const par2 = 'Máscara';
    // Teste que o retorno da função é um array.
    // Referência para Array.isArray (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray).
    assert.strictEqual(Array.isArray(productDetails(par1, par2)), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.entries(productDetails(par1, par2)), 'object');
    // Teste que os dois objetos são diferentes entre si.
    // Referência para notStrictEqual (https://www.w3schools.com/nodejs/met_assert_notstrictequal.asp).
    assert.notStrictEqual(productDetails(par1, par2), productDetails(par1, par2));
    // (Difícil) Teste que os dois productIds terminam com 123.
    // Referência:usuário GitHub: EdmilsonBernardo, link (https://github.com/tryber/sd-010-a-project-js-unit-tests/pull/111/files).
    assert.strictEqual(productDetails(par1, par2)[0].details.productId, `${par1}123`);
    assert.strictEqual(productDetails(par1, par2)[1].details.productId, `${par2}123`);
  });
});
