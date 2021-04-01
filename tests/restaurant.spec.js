/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const { TestScheduler } = require('@jest/core');
const { strictEqual, deepStrictEqual } = require('assert');
const assert = require('assert');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1:
    // Para o teste a seguir consultei o seguinte link:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    assert.strictEqual(typeof (createMenu({}).fetchMenu()), 'object');
    // TESTE 2:
    objectReceived = Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu());
    objectReturned = ['food', 'drink'];
    // Para o seguinte teste, consultei o link a seguir para entender melhor a diferença de
    // strictEqual e deepStrictEqual:
    // https://qastack.com.br/programming/13225274/the-difference-between-assert-equal-and-assert-deepequal-in-javascript-testing-w
    assert.deepStrictEqual(objectReceived, objectReturned);
    // TESTE 3:
    const receivedMenu = createMenu({ food: {}, drink: {} }).fetchMenu();
    const returnedMenu = { food: {}, drink: {} };
    assert.deepStrictEqual(receivedMenu, returnedMenu);
    // TESTE 4:
    assert.deepStrictEqual(createMenu({}).consumption, []);
    // TESTE 5:
    // Para o teste da função order, consultei o repositório do Sérgio da Turma 10A.
    assert.deepStrictEqual(createMenu().order('coxinha'), ['coxinha']);
    // TESTE 6:
    const sixthTest = createMenu({ food: { coxinha: 3.9, sashimi: 1, sopa: 9.90 }, drink: { agua: 3.90, cerveja: 6.9 } });
    sixthTest.order('coxinha');
    sixthTest.order('agua');
    sixthTest.order('sopa');
    sixthTest.order('sashimi');
    assert.deepStrictEqual(sixthTest.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    const seventhTest = createMenu({ food: { coxinha: 3.9, sashimi: 1, sopa: 9.90 }, drink: { agua: 3.90, cerveja: 6.9 } });
    seventhTest.order('coxinha');
    seventhTest.order('agua');
    seventhTest.order('coxinha');
    assert.deepStrictEqual(seventhTest.consumption, ['coxinha', 'agua', 'coxinha']);
    // TESTE 8:
    assert.strictEqual(seventhTest.pay(), 11.7)
  });
});
