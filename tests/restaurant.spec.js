/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

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
    const objetoRetornado1 = createMenu();
    assert.strictEqual(Object.keys(objetoRetornado1).includes('fetchMenu'), true);
    const objetoRetornado2 = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(Object.keys(objetoRetornado2.fetchMenu()), ['food', 'drink']);
    const objetoQualquer = { food: { aveia: 0.50, fruta: 1 }, drink: { água: 1.50, suco: 2.50 } };
    const objetoRetornado3 = createMenu(objetoQualquer);
    assert.deepStrictEqual(objetoRetornado3.fetchMenu(), objetoQualquer);
    assert.deepStrictEqual(objetoRetornado3.consumption(), []);
    objetoRetornado3.order('fruta');
    assert.strictEqual(objetoRetornado3.consumption().includes('fruta'), true);
    const initialLength = objetoRetornado3.consumption().length;
    objetoRetornado3.order('suco');
    objetoRetornado3.order('aveia');
    objetoRetornado3.order('água');
    const finalLength = objetoRetornado3.consumption().length;
    assert.strictEqual((finalLength - initialLength), 3);
    assert.deepStrictEqual(objetoRetornado3.consumption(), ['fruta', 'suco', 'aveia', 'água']);
    objetoRetornado3.order('fruta');
    assert.deepStrictEqual(objetoRetornado3
      .consumption(), ['fruta', 'suco', 'aveia', 'água', 'fruta']);
    let somaDosPreços = 0;
    const menu = objetoRetornado3.fetchMenu();
    for (let index = 0; index < objetoRetornado3.consumption().length; index += 1) {
      let request = objetoRetornado3.consumption()[index];
      if (Object.keys(menu.food).includes(request)) {
        somaDosPreços += menu.food[request];
      }
      if (Object.keys(menu.drink).includes(request)) {
        somaDosPreços += menu.drink[request];
      }
    }
    assert.strictEqual(objetoRetornado3.pay(), somaDosPreços);
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
