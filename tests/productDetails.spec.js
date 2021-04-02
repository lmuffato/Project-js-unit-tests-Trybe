const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(productDetails('awa', 'twix')), true);
    assert.strictEqual(productDetails.length, 2);
    assert.strictEqual(typeof productDetails('awa', 'twx')[0], 'object');
    assert.strictEqual(typeof productDetails('awa', 'twx')[1], 'object');
    assert.strictEqual(productDetails('awa', 'twix')[0] !== productDetails('awa', 'twix')[1], true);
    assert.strictEqual(productDetails('awa', 'twix')[0].details.productId.includes('123'), true);
    assert.strictEqual(productDetails('awa', 'twix')[1].details.productId.includes('123'), true);
  });
});
