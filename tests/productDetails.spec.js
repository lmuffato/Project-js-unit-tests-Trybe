const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(typeof productDetails('água', 'suco'), 'object');
    assert.strictEqual(productDetails('água', 'suco').length, 2);
    assert.strictEqual(typeof productDetails('água', 'suco')[0], 'object');
    assert.strictEqual(typeof productDetails('água', 'suco')[1], 'object');
    assert.notStrictEqual(productDetails('água', 'suco')[0], productDetails('água', 'suco')[1]);
    assert.strictEqual(productDetails('água', 'suco')[0].details.productId, `${'água'}123`);
    assert.strictEqual(productDetails('água', 'suco')[1].details.productId, `${'suco'}123`);
  });
});
