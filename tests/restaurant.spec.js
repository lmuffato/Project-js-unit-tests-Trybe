/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1

    const checkFecth = Object.keys(createMenu()).includes('fetchMenu');

    assert.ok(checkFecth, true);

    // TESTE 2:

    const objetoRetornado = {
      food: {},
      drink: {},
    };

    assert.deepStrictEqual(objetoRetornado, createMenu(objetoRetornado).fetchMenu());

    // TESTE 3

    const objetoQualquer = createMenu({
      bolacha: 'certo',
      biscoito: 'errado',
    });

    assert.deepStrictEqual(objetoQualquer, createMenu(objetoQualquer).fetchMenu());

    // TESTE 4

    const frutas = {
      fruta: 'banana',
      suco: 'abacaxi',
    };
    const objetoFrutas = createMenu(frutas);

    assert.deepStrictEqual(objetoFrutas.consumption, []);

    // TESTE 5

    const objetoCoxinha = createMenu({
      salgado: 'coxinha',
      refrigerante: 'soda',
    });
    const toConsumption = 'coxinha';

    objetoCoxinha.order(toConsumption);

    assert.deepStrictEqual(objetoCoxinha.consumption[0], toConsumption);

    // TESTE 6

    const menuComidas = createMenu();
    const comidas = ['coxinha', 'agua', 'sopa', 'sashimi'];
    comidas.forEach((e) => menuComidas.order(e));

    assert.deepStrictEqual(menuComidas.consumption, comidas);

    // TESTE 7

    const menuComidasR = createMenu();
    const comidasR = ['coxinha', 'agua', 'coxinha'];
    comidasR.forEach((e) => menuComidasR.order(e));

    assert.deepStrictEqual(comidasR, menuComidasR.consumption);

    // TESTE 8

    const menuComidasP = createMenu();
    const comidasP = ['coxinha', 'agua', 'coxinha'];
    const sum = 7.80;
    comidasP.forEach((e) => menuComidasP.order(e));
    console.log(menuComidasP.pay());
    assert.deepStrictEqual(menuComidasP.pay(), sum);
  });
});
