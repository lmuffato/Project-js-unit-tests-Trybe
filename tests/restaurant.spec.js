/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

const emptyObject = { food: {}, drink: {} };

let objetoRetornado = createMenu();

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    const test = assert.deepStrictEqual;

    const obj = {
      food: {
        coxinha: 3.9,
        sopa: 9.9,
        sashimi: 10,
      },
      drink: {
        agua: 3.9,
        cerveja: 6.9,
      },
    };

    assert.strictEqual(Object.keys(createMenu()).includes('fetchMenu'), true);
    assert.deepStrictEqual(Object.keys(createMenu(emptyObject).fetchMenu()), ['food', 'drink']);
    test(createMenu(emptyObject).fetchMenu(), emptyObject);
    test(createMenu().consumption, []);

    objetoRetornado.order('coxinha');

    test(objetoRetornado.consumption.includes('coxinha'), true);

    objetoRetornado.order('agua');
    objetoRetornado.order('sopa');
    objetoRetornado.order('sashimi');

    test(objetoRetornado.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);

    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');

    test(objetoRetornado.consumption.filter((item) => item === 'coxinha').length, 3);
    test(createMenu(obj).pay(objetoRetornado.consumption), 43.34);
  });
});
