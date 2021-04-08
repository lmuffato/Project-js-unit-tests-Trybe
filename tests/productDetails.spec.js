/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

const callAssert = assert.deepStrictEqual;
const callFunction = productDetails('Alcool gel', 'Máscara');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(callFunction), true);
    callAssert(callFunction.length, 2);
    callAssert(typeof callFunction[0], 'object');
    callAssert(typeof callFunction[1], 'object');
    assert.notDeepStrictEqual(callFunction[0], callFunction[1]);
    assert.deepStrictEqual(productDetails()[0].details, productDetails()[1].details);
  });
});
