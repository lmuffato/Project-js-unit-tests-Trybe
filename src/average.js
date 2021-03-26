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
const verifyArray = (array) => {
  if (array.length === 0) return 1;

  for (let i = 0; i < array.length; i += 1) {
    if (typeof (array[i]) === 'string') {
      return 1;
    }
  }
};

const createAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum / array.length;
};

const average = (array) => {
  let averageReturn = 0; // definindo a média que será retornada
  if (verifyArray(array)) {
    return undefined;
  }
  averageReturn = createAverage(array);
  return Math.round(averageReturn);
};

module.exports = average;
