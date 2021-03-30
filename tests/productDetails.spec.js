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
    const iten1 = 'Alcool gel';
    const iten2 = 'Máscara';
    assert.strictEqual(Array.isArray(productDetails(iten1, iten2)), true);
    // Pesquisado no site https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery#:~:text=O%20m%C3%A9todo%20Array.,e%20false%20se%20n%C3%A3o%20%C3%A9.&text=O%20typeof%20%C3%A9%20um%20Operador,o%20tipo%20de%20um%20Operando.;
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails(iten1, iten2).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails(iten1, iten2), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails(iten1, iten2), productDetails(iten1, iten2));
    // Referência:usuário GitHub: EdmilsonBernardo, link (https://github.com/tryber/sd-010-a-project-js-unit-tests/pull/111/files).
    // (Difícil) Teste que os dois productIds terminam com 123.
    const produtos = productDetails(iten1, iten2);
    const produto01 = produtos[0].details.productId;
    const produto02 = produtos[1].details.productId;
    assert.strictEqual(produto01.includes('123') && produto02.includes('123'), true);
    // referencia https://github.com/tryber/sd-010-a-project-js-unit-tests/blob/3011stan-js-unit-tests/tests/productDetails.spec.js
  });
});
