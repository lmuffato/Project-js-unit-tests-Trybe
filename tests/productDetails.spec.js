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
    const itens = productDetails('Alcool', 'Máscara');
    assert.ok(itens, typeof Array);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(itens.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.ok(Object.values(itens), typeof Object);
    // Teste que os dois objetos são diferentes entre si.
    const objeto1 = Object.entries(itens[0]);
    const objeto2 = Object.entries(itens[1]);
    assert.notStrictEqual(objeto1, objeto2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const objetoProp1 = itens[0].details.productId.endsWith('123');
    const objetoProp2 = itens[1].details.productId.endsWith('123');
    const result = objetoProp1 && objetoProp2;
    assert.ok(result, true);
  });
});
