const assert = require('assert');
const myCounter = require('../src/myCounter');

describe('#myCounter', () => {
  it('guarantees the function behaves as expected', () => {
    const expectedOutput = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
    assert.deepStrictEqual(myCounter(), expectedOutput);
  });
});
