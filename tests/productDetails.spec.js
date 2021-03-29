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

const verifyIfIsArrayByLength = (funcao) => {
  const length = funcao.length;
  if (length === undefined) {
    return false;
  }
  return true;
}

const verifyIsArray = (funcao) => {
  let isArrayOrObject;
  let typeOfReturn = typeof (funcao);
  if ( typeOfReturn !== 'object' ) {
    isArrayOrObject = false;
    return isArrayOrObject; //false
  }
  return verifyIfIsArrayByLength(funcao); //return false or true
}

const virifyAllAreObjects = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if(array[index].length !== undefined) {
      return false;
    }
  }
  return true;
}

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const test = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(verifyIsArray(test), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(test.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(virifyAllAreObjects(test), true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(test[0], test[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
