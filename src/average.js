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

const average = (array) => {
  const arrayLength = array.length;
  if (array.length === 0) {
    return undefined;
  }
  const values = Object.values(array);
  let sumOfValues = 0;

  for (let value of values) {
    if (typeof value !== 'number') {
      return undefined;
    }
    sumOfValues += value;
  }

  return Math.round(sumOfValues / arrayLength);
};

const array = [-11, -5, 2];
console.log(average(array));

module.exports = average;
