/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => {
  const array = [{
      name: firstProduct,
      details: {
        productId: `${firstProduct}123`,
      },
    },
    {
      name: secondProduct,
      details: {
        productId: `${secondProduct}123`,
      },
    },
  ];
  return array;
}
module.exports = productDetails;
const assert = require('assert');
assert.strictEqual(productDetails('a', 'b')[0].details.productId.endsWith('123'), true);
assert.strictEqual(productDetails('a', 'b')[1].details.productId.endsWith('123'), true);