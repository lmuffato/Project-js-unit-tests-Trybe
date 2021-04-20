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
    assert.deepStrictEqual(typeof (productDetails('Ácool gel', 'Máscara')), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(Object.entries(productDetails('Ácool gel', 'Máscara')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const object1 = Object.entries(productDetails('Alcool gel', 'Máscara')[0]);
    const object2 = Object.entries(productDetails('Alcool gel', 'Máscara')[1]);
    assert.deepStrictEqual(typeof (object1), 'object');
    assert.deepStrictEqual(typeof (object2), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(object1, object2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let products = productDetails('Alcool gel', 'Máscara')
    let productcode1 = products[0].details.productId
    let productcode2 = products[1].details.productId
    const getNumber = (code) => {
      let splitter = code.split('')
      let numbers = []
      for (index = code.length - 3; index < code.length; index ++){
        numbers.push(splitter[index])
      }
      let numbersJoined = numbers.join('')
      return numbersJoined
    }
    const numbersProduct1 = getNumber(productcode1)
    const numbersProduct2 = getNumber(productcode2)
    assert.deepStrictEqual(numbersProduct1, '123')
    assert.deepStrictEqual(numbersProduct2, '123')
  });
});
