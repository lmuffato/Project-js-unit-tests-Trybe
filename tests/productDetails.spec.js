/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');

const productDetails = require('../src/productDetails');

const Exe01 = 'Alcool gel';
const Exe02 = 'Máscara';

function productIdMustEndWith123(array) {
  let condiction = '';
  for (let key in array) {
    if (productDetails(Exe01, Exe02)[key].details.productId.endsWith('123') === false) {
      condiction = false; break;
    }
    if (productDetails(Exe01, Exe02)[key].details.productId.endsWith('123') === true) {
      condiction = true;
    }
  } return condiction;
}

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails(Exe01, Exe02)), true); // Retorna verdadeiro se o resultado é um array
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails(Exe01, Exe02).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails(Exe01, Exe02)[0] === 'object', true);
    assert.strictEqual(typeof productDetails(Exe01, Exe02)[1] === 'object', true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails(Exe01, Exe02)[0], productDetails(Exe01, Exe02)[0]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productIdMustEndWith123(productDetails(Exe01, Exe02)), true);
  });
});
