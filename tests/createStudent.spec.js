/* eslint-disable max-len */

const assert = require('assert');
const createStudent = require('../src/createStudent');

const message = 'Eita pessoa boa!';

describe('#createStudent', () => {
  it('returns the object as specified', () => {
    const estudante = createStudent('Leandrão, o Lobo Solitário');
    assert.strictEqual(typeof estudante, 'object');
    assert.strictEqual(typeof estudante.feedback, 'function');
    assert.strictEqual(estudante.name, 'Leandrão, o Lobo Solitário');
    assert.strictEqual(estudante.feedback(), message);
    const estudante2 = createStudent('Nobre');
    assert.strictEqual(typeof estudante2, 'object');
    assert.strictEqual(typeof estudante2.feedback, 'function');
    assert.strictEqual(estudante2.name, 'Nobre');
    assert.strictEqual(estudante2.feedback(), message);
    const estudante3 = createStudent('Inácio');
    assert.strictEqual(typeof estudante3, 'object');
    assert.strictEqual(typeof estudante3.feedback, 'function');
    assert.strictEqual(estudante3.name, 'Inácio');
    assert.strictEqual(estudante3.feedback(), message);
  });
});
