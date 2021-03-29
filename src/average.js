/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
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

const numberCheck = (array) => {
  const arrayCheck = array;

  for (let index = 0; index < arrayCheck.length; index += 1) {
    if (typeof arrayCheck[index] !== 'number') {
      return false;
    }
  }
};

const sumNumbers = (array) => {
  const arrayNumbers = array;
  let sumArray = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    sumArray += arrayNumbers[index];
  }
  return sumArray / arrayNumbers.length;
};

const average = (array) => {
  const arrays = array;

  if (arrays.length === 0 || numberCheck(arrays) === false) {
    return undefined;
  }
  return sumNumbers(arrays);
};

module.exports = average;
