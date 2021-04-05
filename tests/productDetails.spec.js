/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

// ESCREVA SEUS TESTES ABAIXO:
// Teste que o retorno da função é um array.
// Teste que o array retornado pela função contém dois itens dentro.
// Teste que os dois itens dentro do array retornado pela função são objetos.
// Teste que os dois objetos são diferentes entre si.
// (Difícil) Teste que os dois productIds terminam com 123.

const isEnd123 = (array) => {
  const item1 = array[0].details.productId.endsWith('123');
  const item2 = array[1].details.productId.endsWith('123');
  return item1 && item2;
};

const isObject = (objects) => {
  if (objects[0].toString() === '[object Object]' && objects[1].toString() === '[object Object]') {
    return true;
  }
  return false;
};

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    const callFunction = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(callFunction), true);
    assert.strictEqual(callFunction.length, 2);
    assert.strictEqual(isObject(callFunction), true);
    assert.notDeepStrictEqual(callFunction[0], callFunction[1]);
    assert.ok(isEnd123(callFunction));
  });
});
