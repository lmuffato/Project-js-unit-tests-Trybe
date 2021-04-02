/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    const menu = {
      food: { coxinha: 3.90, sanduiche: 9.90, sopa: 12, sashimi: 20 },
      drink: { agua: 3.90, cerveja: 6.90 },
    };
    assert.strictEqual(typeof createMenu(menu).fetchMenu, 'function');
    assert.deepStrictEqual(Object.keys(createMenu(menu).fetchMenu()), ['food', 'drink']);
    let restaurant = createMenu(menu);
    assert.deepStrictEqual(createMenu(menu).fetchMenu(), menu);
    assert.deepStrictEqual(createMenu(menu).consumption, []);
    restaurant.order('coxinha');
    assert.deepStrictEqual(restaurant.consumption, ['coxinha']);
    restaurant.order('agua');
    restaurant.order('sopa');
    restaurant.order('sashimi');
    assert.deepStrictEqual(restaurant.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);
    restaurant = createMenu(menu);
    restaurant.order('coxinha');
    restaurant.order('agua');
    restaurant.order('coxinha');
    assert.deepStrictEqual(restaurant.consumption, ['coxinha', 'agua', 'coxinha']);
    assert.strictEqual(restaurant.pay(), 11.70);
  });
});
