const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    const objectTeste = { a: 666 };
    const objetoRetornado = createMenu(objectTeste);
    assert.strictEqual(!objetoRetornado.fetchMenu(), false);

    assert.deepStrictEqual(objetoRetornado.consumption, []);

    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha']);

    objetoRetornado.order('agua');
    objetoRetornado.order('sopa');
    objetoRetornado.order('sashimi');
    let arrayTest = ['coxinha', 'agua', 'sopa', 'sashimi'];

    assert.deepStrictEqual(objetoRetornado.consumption, arrayTest);
    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(objetoRetornado.consumption.length, 5);

    const myRestaurant = { food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 } };
    let objetoRetornadoTeste = createMenu(myRestaurant);
    objetoRetornadoTeste.order('coxinha');
    objetoRetornadoTeste.order('coxinha');
    objetoRetornadoTeste.order('agua');

    assert.strictEqual(objetoRetornadoTeste.pay(), 12.87);
  });
});
