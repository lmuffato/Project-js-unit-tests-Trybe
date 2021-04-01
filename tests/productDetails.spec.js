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
    const myArray = productDetails('Alcool gel', 'Máscara');
    assert.ok(myArray, typeof Array);
    assert.deepStrictEqual(myArray.length, 2);
    assert.ok(myArray, typeof Object);
    // assert.ok(myArray, myArray) Cod, construido com o colega Anderson Silva (Andy Turma 10 Tribo A) 
    const object1 = Object.entries(functionTest[0]);
    const object2 = Object.entries(functionTest[1]);
    assert.notDeepStrictEqual(object1, object2);
    // (Difícil) Teste que os dois productIds terminam com 123.  Cod, construido com o colega Anderson Silva (Andy Turma 10 Tribo A) 
    // assert.ok(myArry.indexOf('123'), true);
    const end1 = myArray[0].details.productId.endsWith('123');
    const end2 = myArray[1].details.productId.endsWith('123');
    const concatEnds = end1 && end2;
    assert.ok(concatEnds, true);
  });
});
