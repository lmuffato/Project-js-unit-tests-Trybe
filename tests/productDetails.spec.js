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

    // https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array
    assert.strictEqual(Array.isArray(productDetails()), true);

    assert.strictEqual(productDetails('product1', 'product2').length, 2);

    let types = [];
    productDetails('product1', 'product2').forEach((product) => types.push(typeof product));
    assert.strictEqual(types.every((type) => type === 'object'), true);

    const entries = Object.entries(productDetails('product1', 'product2'));
    assert.strictEqual(entries[0] !== entries[1], true);

    const values = Object.values(productDetails('product1', 'product2'));
    let productIds = [];
    values.forEach((value) => productIds.push(value.details.productId.slice(-3)));
    assert.strictEqual(productIds.every((id) => id === '123'), true);
  });
});
