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

const testArrayItemsIsObject = (array) => {
  const testArray = array;

  testArray.forEach((item) => {
    if (typeof item !== 'object') {
      return false;
    }
  });

  return true;
};

const testArrayItemsIsDiferent = (array) => {
  const testArray = array;

  if (testArray[0] !== testArray[1]) {
    return true;
  }

  return false;
};

const isEndEqual123 = (array) => {
  const testArray = array;

  testArray.forEach((item) => {
    const string = item.details.productId;
    // Referência: https://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string
    const finalId = string.substr(string.length - 3);
    if (finalId !== '123') return false;
  });

  return true;
};

const alcool = 'Alcool gel';
const mascara = 'Máscara';

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // Referência: https://github.com/tryber/sd-010-a-project-js-unit-tests/pull/101/files
    assert.strictEqual(Array.isArray(productDetails(alcool, mascara)), true);
    assert.deepStrictEqual(productDetails(alcool, mascara).length, 2);
    assert.strictEqual(testArrayItemsIsObject(productDetails(alcool, mascara)), true);
    assert.strictEqual(testArrayItemsIsDiferent(productDetails(alcool, mascara)), true);
    assert.strictEqual(isEndEqual123(productDetails(alcool, mascara)), true);
  });
});
