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
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) T com 123.este que os dois productIds terminam
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    assert.strictEqual(Object.entries(productDetails('Alcool gel', 'Máscara')).length, 2);
    const func = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof func[0] && typeof func[1], 'object');
    assert.strictEqual(func[0].name !== func[1].name, true);
    let string = func[0].details.productId;
    assert.strictEqual(string.slice(-3), '123');
    
  });
});
