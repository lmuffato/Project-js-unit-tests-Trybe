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
const callFunction2 = productDetails('Alcool gel', 'Máscara');
console.log(callFunction2.toString());
module.exports = productDetails;
