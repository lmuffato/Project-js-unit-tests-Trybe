/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

const cardapio = {
  food: {
    pizza: 19.9,
    coxinha: 3.90,
  },
  drink: {
    agua: 1.90,
    refrigerante: 4.9,
  },
};

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1
    assert.strictEqual(typeof createMenu(), 'object');

    // TESTE 2
    const arrayVazio = ['food', 'drink'];
    const objetoRetornadoKeys = Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu());
    assert.deepStrictEqual(objetoRetornadoKeys, arrayVazio);

    // TESTE 3
    const objReturn = cardapio;
    const objetoRetornado = createMenu(cardapio).fetchMenu();
    assert.deepStrictEqual(objetoRetornado, objReturn);

    // TESTE 4
    assert.deepStrictEqual(createMenu(cardapio).consumption, []);

    // TESTE 5
    const objSalgados = createMenu({
      coxinha: 3.9,
      agua: 2.0,
    });
    objSalgados.order('coxinha');
    assert.deepStrictEqual(objSalgados.consumption, ['coxinha']);

    // TESTE 6
    const objCardapio = createMenu({
      coxinha: 3.9,
      agua: 2.0,
      sopa: 3.9,
      sashimi: 4.9,
    });
    objCardapio.order('coxinha');
    objCardapio.order('agua');
    objCardapio.order('sopa');
    objCardapio.order('sashimi');
    const arrayCardapio = ['coxinha', 'agua', 'sopa', 'sashimi'];
    assert.deepStrictEqual(objCardapio.consumption, arrayCardapio);

    // TESTE 7
    const objRepete = createMenu({
      coxinha: 3.9,
      agua: 2.9,
    });
    objRepete.order('coxinha');
    objRepete.order('agua');
    objRepete.order('coxinha');
    const arrayCardapioRepete = ['coxinha', 'agua', 'coxinha'];
    assert.deepStrictEqual(objRepete.consumption, arrayCardapioRepete);

    // TESTE 8
    const objPagamento = createMenu(cardapio);
    objPagamento.order('coxinha');
    objPagamento.order('agua');
    objPagamento.order('coxinha');
    const pagamento = objPagamento.pay();
    assert.deepStrictEqual(pagamento, 10.67);
  });
});
