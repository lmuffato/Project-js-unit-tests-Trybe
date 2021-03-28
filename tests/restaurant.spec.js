/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const { assertEmptyStatement } = require('@babel/types');
const assert = require('assert');
const createMenu = require('../src/restaurant');

const objetoRetornado = createMenu({ food: {}, drink: {} });
const consumptionItems = (quantity) => {
  const listConsumitionItems = ['coxinha', 'agua', 'sopa', 'sashimi', 'sashimi'];
  for (let index = 0; index < quantity; index += 1) {
    objetoRetornado.order(listConsumitionItems[index]);
  }
};

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    assert.deepStrictEqual(typeof (createMenu()), 'object');
    assert.deepStrictEqual(objetoRetornado.fetchMenu(), { food: {}, drink: {} });
    assert.deepStrictEqual({ food: {}, drink: {} }, objetoRetornado.fetchMenu());
    assert.deepStrictEqual(objetoRetornado.consumption, []);
    consumptionItems(1);
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha']);
    objetoRetornado.consumption = [];
    consumptionItems(4);
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);
    objetoRetornado.consumption = [];
    consumptionItems(5);
    assert.deepStrictEqual(objetoRetornado.consumption,
      ['coxinha', 'agua', 'sopa', 'sashimi', 'sashimi']);
  });
});
