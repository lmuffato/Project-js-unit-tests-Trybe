/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

const isObject = (thing) => typeof thing === 'object';
const isFirstAppearence = (element, index, array) => array.indexOf(element) === index;
const allUnique = (array) => array.every(isFirstAppearence);

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.ok(Array.isArray(productDetails('foo', 'bar')));
    assert.strictEqual(productDetails().length, 2);
    assert.ok(productDetails().every(isObject));
    assert.ok(allUnique(productDetails()));
    assert.ok(productDetails()
      .every((product) => product.details.productId.endsWith('123')));
  });
});
