/*
  A função average recebe um array (tamanho variável) element retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// nao conseguindo fazer o array passar para dentro da função, mais o restante da logica eu sabia
// dei uma olhada nesta parte no codigo do
// https://github.com/tryber/sd-010-a-project-js-unit-tests/blob/andrejaques-project-js-tests/src/average.js
const average = (array) => {
  const arrayX = array;
  let element = 0;
  if (arrayX.length <= 0) {
    return undefined;
  }
  for (let i = 0; i < arrayX.length; i += 1) {
    if (typeof (arrayX[i]) !== 'number') {
      return undefined;
    }
    element += arrayX[i];
    if (typeof element === 'number') {
      element = Math.round(element / arrayX.length);
    }
    element = undefined;
  }
  return element;
};

module.exports = average; // assert.fail();
