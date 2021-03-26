/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {

    assert.strictEqual(typeof(createMenu({}).fetchMenu()), 'object');

    assert.deepStrictEqual(Object.keys(createMenu({food: {}, drink: {}}).fetchMenu()), ['food', 'drink']);

    assert.deepStrictEqual(createMenu({food: {}, drink: {}, desset: {} }).fetchMenu(), {food: {}, drink: {}, desset: {}})

    assert.deepStrictEqual(createMenu({}).consumption, [])

    assert.deepStrictEqual(createMenu().order('coxinha'), ['coxinha']);

    const newOrder = (arr) => {
      const menu = createMenu();
      arr.forEach(element => {
        menu.order(element)
      });

      return menu.consumption;
    }

    assert.deepStrictEqual(newOrder(["coxinha", "agua", "sopa", "sashimi"]), ["coxinha", "agua", "sopa", "sashimi"])

    assert.deepStrictEqual(newOrder(['coxinha', 'agua', 'coxinha']), ['coxinha', 'agua', 'coxinha'])
  
    const menu = () => {
      const menu = createMenu({ food: { coxinha: 1.25 }, drink: { agua: 2.5 } })
      menu.order('coxinha');
      menu.order('agua');
      menu.order('coxinha');
      return menu;
    }

    assert.strictEqual(menu().pay(), 5.5)
  });
});
