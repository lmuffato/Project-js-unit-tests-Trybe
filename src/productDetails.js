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

const callFunction = productDetails('Alcool gel', 'Máscara');

// console.log(callFunction);

// const isObject = (objects) => {
//   const ts = objects.map((object) => {
//     const test = object.toString() === '[object Object]' ? 'object' : 'notObject';
//     console.log(test);
//     return test;
//   });
//   console.log(ts);
//   return ts;
// };
// console.log(isObject(callFunction));

// const isObject = (objects) => {
//   if (objects[0].toString() === '[object Object]' && objects[1].toString() === '[object Object]') {
//     return true;
//   }
//   return false;
// };
// console.log(isObject(callFunction));

module.exports = productDetails;
