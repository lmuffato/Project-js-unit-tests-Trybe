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

const includeKeys = (object, keys) => {
  const objKeys = Object.keys(object.fetchMenu());
  return objKeys.includes(keys[0]) && objKeys.includes(keys[1]);
};

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1:
    assert.deepStrictEqual(typeof (createMenu()), 'object');
    // TESTE 2:
    assert.strictEqual(includeKeys(objetoRetornado, ['food', 'drink']), true);
    // TESTE 3:
    assert.deepStrictEqual({ food: {}, drink: {} }, objetoRetornado.fetchMenu());
    // TESTE 4:
    assert.deepStrictEqual(objetoRetornado.consumption, []);
    // TESTE 5:
    consumptionItems(1);
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha']);
    // TESTE 6:
    objetoRetornado.consumption = [];
    consumptionItems(4);
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);
    // TESTE 7:
    objetoRetornado.consumption = [];
    consumptionItems(5);
    assert.deepStrictEqual(objetoRetornado.consumption,
      ['coxinha', 'agua', 'sopa', 'sashimi', 'sashimi']);
    // TESTE 8:
    const objectFoodAndDrink = createMenu({ food: { coxinha: 2, sopa: 4 },
      drink: { agua: 2, suco: 3 } });
    objectFoodAndDrink.consumption = ['coxinha', 'sopa', 'agua'];
    const total = 8 + (8 * 0.10);
    assert.strictEqual(objectFoodAndDrink.pay(), total);
  });
});
