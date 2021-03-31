/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    let objetoRetornado = createMenu({
      food: {},
      drinks: {},
    });

    assert.strictEqual(typeof objetoRetornado.fetchMenu, 'function');
    assert.deepStrictEqual(objetoRetornado.fetchMenu(), {
      food: {},
      drinks: {},
    });
    objetoRetornado = createMenu({
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    assert.deepStrictEqual(objetoRetornado.fetchMenu(), {
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha']);
    objetoRetornado.order('agua');
    objetoRetornado.order('sopa');
    objetoRetornado.order('sashimi');
    assert.deepStrictEqual(objetoRetornado.consumption, [
      'coxinha',
      'agua',
      'sopa',
      'sashimi',
    ]);
    objetoRetornado.consumption = [];
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(objetoRetornado.consumption, [
      'coxinha',
      'agua',
      'coxinha',
    ]);
    assert.deepStrictEqual(objetoRetornado.pay(), 12.87);
  });
});
