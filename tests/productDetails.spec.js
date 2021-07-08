// /* eslint-disable max-len */
// /* eslint-disable no-unused-vars */

// const assert = require('assert');
// const productDetails = require('../src/productDetails');

// /*
//   Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

//   Parâmetros:
//   - Uma string;
//   - Uma string;

//   Comportamento:
//   productDetails('Alcool gel', 'Máscara') // Retorna:
//   [
//     {
//       name: 'Alcool gel'
//       details: {
//         productId: 'Alcool gel123'
//       }
//     },
//     {
//       name: 'Máscara'
//       details: {
//         productId: 'Máscara123'
//       }
//     }
//   ]

//   OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
// */

// describe('#productDetails', () => {
//   it('tests the function has the correct behaviour', () => {
//     // assert.fail();
//     // ESCREVA SEUS TESTES ABAIXO:
//     // Teste que o retorno da função é um array.
//     // Exercicio resolvido baseado no codigo de Michael Petterson
//     const obj1 = {};
//     const obj2 = {};
//     assert.strictEqual(Array.isArray(productDetails(obj1, obj2)), true);
//     // Teste que o array retornado pela função contém dois itens dentro.
//     assert.strictEqual(Object.keys(productDetails(obj1, obj2)).length, 2);
//     // Teste que os dois itens dentro do array retornado pela função são objetos.
//     assert.strictEqual(typeof Object.keys(productDetails(obj1, obj2)), 'object');
//     // Teste que os dois objetos são diferentes entre si.
//     assert.notStrictEqual(Object.keys(productDetails(obj1, obj2))[0],
//       Object.keys(productDetails(obj1, obj2))[1]);
//     // (Difícil) Teste que os dois productIds terminam com 123.
//     assert.strictEqual(productDetails(obj1, obj2)[0]
//       .details.productId.endsWith(123), true);
//     assert.strictEqual(productDetails(obj1, obj2)[1]
//       .details.productId.endsWith(123), true);
//   });
// });
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
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const output = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof output[0], 'object');
    assert.strictEqual(typeof output[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(output[0], output[1]);
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(output[0].details.productId.includes('123'), true);
    assert.strictEqual(output[1].details.productId.includes('123'), true);
  });
});
