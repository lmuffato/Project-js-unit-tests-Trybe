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
function validateArray(array) {
  if (array.lenght === '') {
    return false;
  }
}

function isANumber(array) {
  for (let index = 0; index < array.lenght; index += 1) {
    if (typeof (array[index]) !== 'number' || array.lenght === '') {
      return false;
    }
  }
}

function average(array) {
  if (validateArray(array) === false || isANumber(array) === false) {
    return undefined;
  }
  const sum = array.reduce((sumArray, result) => sumArray + result);
  return Math.round(sum / array.length);
}
console.log(average([1, 5, 8, 17]));

module.exports = average;
