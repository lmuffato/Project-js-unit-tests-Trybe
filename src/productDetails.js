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

const productDetails = (firstProduct, secondProduct) => [
  {
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
const a = 'Alcool gel';
const b = 'Máscara';
const result = productDetails(a, b);
console.log(result);
console.table(typeof result);
// console.log(result.details.productId.match(/123$/g) === ['123']);
// console.log(productDetails('Alcool gel', 'Máscara')[0].details.productId.split("").reverse().join("").includes(321, 0));

module.exports = productDetails;
