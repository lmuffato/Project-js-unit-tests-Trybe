/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores  recebidos.
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

const average = (numbersArray) => {
  let sum = 0;
  let averageNumber = 0;

  if (numbersArray.length === 0) {
    return undefined;
  }
  for (let element of numbersArray) {
    if (typeof element !== 'number') {
      return undefined;
    }
    sum += element;
    averageNumber = sum / numbersArray.length;
  }
  // Para saber como atender ao requisito de arred ondar o número consultei o link:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round;
  // Contei com o auxílio do Luan Ramalho nesse exercício;
  return Math.round(averageNumber);
};
module.exports = average;
