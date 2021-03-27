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
    assert.deepStrictEqual(Array.isArray(productDetails('Alcool gel', 'Mascara')), true);
    for (let index = 0; index < 2; index += 1) {
      assert.deepStrictEqual(typeof productDetails('alcool', 'gel')[index], 'object');
    }
    assert.deepStrictEqual(productDetails('gel', 'mascara')[0]
    !==  productDetails('gel', 'mascara')[1], true);
    for (let index = 0; index < 2; index += 1) {
      const teste = productDetails('1', '2')[index].details.productId.split('');
      const teste2 = teste.length;
      assert.strictEqual(teste[teste2 - 3], '1');
      assert.strictEqual(teste[teste2 - 2], '2');
      assert.strictEqual(teste[teste2 - 1], '3'); // Feito com base e ajuda do Bruno Mendes
    }
  });
});
