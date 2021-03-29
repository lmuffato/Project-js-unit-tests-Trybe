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
const products = productDetails('Alcool gel', 'Máscara');
const productAcoll = products[0];
const productMascara = products[1];
const acoll123 = productAcoll.details.productId.includes('123');
const mascara123 = productMascara.details.productId.includes('123');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(products, [productAcoll, productMascara]);
    assert.strictEqual(products.length, 2);
    assert.strictEqual(typeof productMascara && typeof productAcoll, 'object');
    assert.strictEqual(productAcoll === productMascara, false);
    assert.strictEqual(acoll123 && mascara123, true);
  });
});

// ESCREVA SEUS TESTES ABAIXO:
// Teste que o retorno da função é um array.
// Teste que o array retornado pela função contém dois itens dentro.
// Teste que os dois itens dentro do array retornado pela função são objetos.
// Teste que os dois objetos são diferentes entre si.
// (Difícil) Teste que os dois productIds terminam com 123.