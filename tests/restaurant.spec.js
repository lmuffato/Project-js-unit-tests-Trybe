/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(typeof (createMenu({}).fetchMenu()), 'object');

    const receivedKeys = Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu());
    const expectedKeys = ['food', 'drink'];
    assert.deepStrictEqual(receivedKeys, expectedKeys);

    const receivedMenu = createMenu({ food: {}, drink: {}, desset: {} }).fetchMenu();
    const expectedMenu = { food: {}, drink: {}, desset: {} };
    assert.deepStrictEqual(receivedMenu, expectedMenu);

    assert.deepStrictEqual(createMenu({}).consumption, []);

    assert.deepStrictEqual(createMenu().order('coxinha'), ['coxinha']);

    const newOrder = (arr) => {
      const menu = createMenu();
      arr.forEach((element) => {
        menu.order(element);
      });

      return menu.consumption;
    };

    const firstOrder = ['coxinha', 'agua', 'sopa', 'sashimi'];
    assert.deepStrictEqual(newOrder(firstOrder), firstOrder);

    const secondOrder = ['coxinha', 'agua', 'coxinha'];
    assert.deepStrictEqual(newOrder(secondOrder), secondOrder);

    const newMenu = () => {
      const menu = createMenu({ food: { coxinha: 1.25 }, drink: { agua: 2.5 } });
      menu.order('coxinha');
      menu.order('agua');
      menu.order('coxinha');
      return menu;
    };

    assert.strictEqual(newMenu().pay(), 5.5);
  });
});
