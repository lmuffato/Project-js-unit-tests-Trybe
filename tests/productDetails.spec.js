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
    assert.strictEqual(
      Array.isArray(productDetails('firstProduct', 'secondProduct')),
      true,
    );
    assert.strictEqual(productDetails('param1', 'param2').length, 2);
    const firstProduct = productDetails('param1', 'param2')[0];
    const secondProduct = productDetails('param1', 'param2')[1];
    assert.ok(
      Object.keys(firstProduct).length >= 1
        && Object.keys(secondProduct).length >= 1,
    );
    assert.notDeepStrictEqual(
      firstProduct,
      secondProduct,
      'Os objetos não são diferentes entre si',
    );
    const prod1 = firstProduct.details.productId;
    const prod2 = secondProduct.details.productId;
    const prodSize1 = prod1.length;
    const prodSize2 = prod2.length;

    assert.ok(prod1.slice(prodSize1 - 3, prodSize1) === '123');
    assert.ok(prod2.slice(prodSize2 - 3, prodSize2) === '123');

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
