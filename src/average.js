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

/*
const verifyNumbers = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number' || array.length === 0) {
      return false;
    }
    else {
      return true;
    };
  };
};

const reducer = (accumulator, currentValue) => {
  acumulator = []
  currentValue
  if (verifyNumbers(array) === true){
    for (let index = 0; index < acumulator.length; index += 1) {
      currentValue = (accumulator.reduce(reducer) / acumulator[index]);
    };
  };
};
console.log (Math.round(reducer([2, 4, 5, 6, 7])));
module.exports = average;
*/
