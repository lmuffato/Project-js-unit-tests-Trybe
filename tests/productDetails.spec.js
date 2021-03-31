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
    assert.ok(typeof productDetails(), 'array');
    const produtos = productDetails('Álcool em gel', 'Máscara');
    assert.strictEqual(produtos.length, 2);
    assert.ok(typeof Object.keys(productDetails), 'object');
    assert.strictEqual(Object.keys(productDetails)[0] === Object.keys(productDetails)[1], true);
    assert.ok(typeof Object.keys(productDetails), 'object');
    const verify1 = produtos[0].details.productId.substr(-3);
    const verify2 = produtos[1].details.productId.substr(-3);
    assert.strictEqual(verify1, verify2);
    // Esse último requisito fiz com ajuda da Ana Ventura pelo slack.
  });
});
