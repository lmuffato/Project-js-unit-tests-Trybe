/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
// referencia do código
// https://github.com/tryber/sd-010-a-project-js-unit-tests/blob/rafaelmg-js-unit-tests/tests/restaurant.spec.js
const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    const parse = (num) => parseFloat(num).toFixed(2);
    const obj1 = createMenu();
    assert.ok(typeof obj1.fetchMenu === 'function');
    const obj2 = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(Object.keys(obj2.fetchMenu()), ['food', 'drink']);
    const obj3 = createMenu({ food: { coxinha: 3.90 }, drink: { agua: 3.90 } });
    assert.deepStrictEqual(obj3.fetchMenu(), { food: { coxinha: 3.90 }, drink: { agua: 3.90 } });
    const obj4 = createMenu({ food: { coxinha: 3.90 }, drink: { agua: 3.90 } });
    assert.deepStrictEqual(obj4.consumption, []);
    const obj5 = createMenu({ food: { coxinha: 3.90 }, drink: { agua: 3.90 } });
    obj5.order('coxinha');
    assert.deepStrictEqual(obj5.consumption, ['coxinha']);
    const obj6 = createMenu({});
    obj6.order('coxinha');
    obj6.order('agua');
    obj6.order('sopa');
    obj6.order('sashimi');
    assert.deepStrictEqual(obj6.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);
    const obj7 = createMenu({});
    obj7.order('coxinha');
    obj7.order('agua');
    obj7.order('coxinha');
    assert.deepStrictEqual(obj7.consumption, ['coxinha', 'agua', 'coxinha']);
    const obj8 = createMenu({
      food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 },
    });
    obj8.order('coxinha');
    obj8.order('agua');
    obj8.order('coxinha');
    assert.strictEqual(parse(obj8.pay()), parse(1.1 * 11.70));
  });
});
