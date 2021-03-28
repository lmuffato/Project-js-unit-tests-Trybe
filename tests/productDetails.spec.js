// /* eslint-disable max-len */
// /* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

// /*
//   Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

//   Parâmetros:
//   - Uma string;
//   - Uma string;

//   Comportamento:
//   productDetails('Alcool gel', 'Máscara') // Retorna:
//   [
//     {
//       name: 'Alcool gel'
//       details: {
//         productId: 'Alcool gel123'
//       }
//     },
//     {
//       name: 'Máscara'
//       details: {
//         productId: 'Máscara123'
//       }
//     }
//   ]

//   OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
// */

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.ok(Array.isArray(productDetails('Alcool gel', 'Mascara')));
    assert.ok(productDetails('x', 'y').length === 2);
    assert.deepStrictEqual(typeof productDetails('x', 'y')[0]
    && typeof productDetails('x', 'y')[1], 'object');
    assert.notDeepStrictEqual(productDetails('x', 'y')[0], productDetails('x', 'y')[1]);
    assert.deepStrictEqual(productDetails('x', 'y')[0].details.productId.substr(1),
      productDetails('x', 'y')[1].details.productId.substr(1));
  });
});
