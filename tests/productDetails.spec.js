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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('Gel', 'Máscara')), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Gel', 'Máscara').length, 2)

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const isObjectAllItensInArray = (param) => {
      const filteredObj = param
                      .filter((x) => typeof x === 'object' && Array.isArray(x) === false)
                      .length;
      if (filteredObj !== param.length) {
        return false;
      }
      return true;
    };

    assert.strictEqual(isObjectAllItensInArray(productDetails('Gel', 'Máscara')), true);

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Gel', 'Máscara')[0] !== productDetails('Gel', 'Máscara')[1], 'true')

    // (Difícil) Teste que os dois productIds terminam com 123.
    const sameProductIdFinal = (product) => {
      return productDetails('Gel', 'Máscara')
              .map(x => x.details.productId.substr(-3))
              .reduce((result, el, index, thisArray) => {
                if (el === thisArray[0]) return true;
                return false;
              });
    }
    assert.strictEqual(sameProductIdFinal(productDetails('Gel', 'Máscara')), true);
  });
});
