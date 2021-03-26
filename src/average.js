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

const average = (numbersArray) => {
  const filtering = numbersArray.filter((number) => typeof(number) !== 'number');
  if (numbersArray.length === 0 || filtering.length > 0) {
    return undefined;
  }

  const average = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }) / numbersArray.length;
  return Math.round(average);
}

module.exports = average;
