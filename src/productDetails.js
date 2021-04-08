/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

module.exports = productDetails;

const assert = require('assert');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.ok(typeof productDetails('x', 'y'), 'array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('x', 'y').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails('x', 'y')[0]), 'object');
    assert.strictEqual(typeof (productDetails('x', 'y')[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails('x', 'y')[0] !== productDetails('x', 'y')[1], true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    // ERRO: Não é possível ler o endsWith de um undefined
    assert.strictEqual(productDetails('x', 'y')[0].details.productId.endsWith('123'), true);
    assert.strictEqual(productDetails('x', 'y')[1].details.productId.endsWith('123'), true);
  });
});
