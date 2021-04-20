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
    const products = productDetails('arroz', 'feijao');
    assert.ok(Array.isArray(products));
    assert.strictEqual(products.length, 2);
    assert.strictEqual(typeof Object.values(products), 'object');
    assert.notDeepStrictEqual(products[0], products[1]);
    const obj1 = products[0].details.productId;
    const obj2 = products[1].details.productId;
    assert.strictEqual(obj1.endsWith(123), obj2.endsWith(123));
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array. DONE
    // Teste que o array retornado pela função contém dois itens dentro. DONE
    // Teste que os dois itens dentro do array retornado pela função são objetos. DONE
    // Teste que os dois objetos são diferentes entre si. DONE
    // (Difícil) Teste que os dois productIds terminam com 123. DONE
  });
});
