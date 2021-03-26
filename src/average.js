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

function check (array) {
  if (array.length === 0) {
    return false;
  } return true;
}

function check2 (array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (typeof element === 'number') {
      return true;
    } return false;    
  }
}

const average = (array) => {
  let sum = 0;
  if (check(array) === true && check2(array) === true) {
    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];
      sum += element;
    }
    return Math.round(sum / length);
  } return undefined;
};

module.exports = average;
