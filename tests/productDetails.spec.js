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
const lastDig1 = () => {
  const id1 = [];
  const ids1 = Object.values(((productDetails()[0] || {}).details || {}).productId);
  for (let index = ((ids1.length) - 3); index < ids1.length; index += 1) {
    id1.push(ids1[index]);
  }
  return id1.join('');
};

const lastDig2 = () => {
  const id2 = [];
  const ids2 = Object.values(((productDetails()[0] || {}).details || {}).productId);
  for (let index = ((ids2.length) - 3); index < ids2.length; index += 1) {
    id2.push(ids2[index]);
  }
  return id2.join('');
};
const comparation = (func1, func2) => {
  if (func1 === func2) {
    return func1;
  }
};

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(typeof productDetails(), 'array');
    // Teste que o retorno da função é um array.
    assert.strictEqual(Object.entries(productDetails()).length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.
    for (let index = 0; index < Object.entries(productDetails()).length; index += 1) {
      assert.strictEqual(typeof Object.entries(productDetails())[index], 'object');
    }
    const dif = () => {
      const details1 = Object.entries(productDetails())[0];
      const details2 = Object.entries(productDetails())[1];
      return details1 === details2;
    };
    assert.strictEqual(dif(), false);
    assert.strictEqual(comparation(lastDig1(), lastDig2()), '123');
  });
});
