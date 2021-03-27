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
const prod1 = 'Colirio';
const prod2 = 'Remedio';
const valor1 = Object.values(productDetails(prod1, prod2)[0].details).join('');
const valor2 = Object.values(productDetails(prod1, prod2)[1].details).join('');
const valor1Number = valor1.split('').filter((n) => (Number(n) || n === 0)).join('');
const valor2Number = valor2.split('').filter((n) => (Number(n) || n === 0)).join('');
describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(typeof productDetails, 'function');
    assert.strictEqual(productDetails(prod1, prod2).length, 2);
    assert.strictEqual(typeof productDetails(prod1, prod2), 'object');
    assert.notStrictEqual(productDetails(prod1, prod2)[0], productDetails(prod1, prod2)[1]);
    assert.strictEqual(valor1Number, valor2Number);
  });
});
