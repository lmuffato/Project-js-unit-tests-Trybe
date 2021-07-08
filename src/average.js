// /*
//   A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
//   Caso a função receba algum valor não númerico ou um array vazio,
//   o valor undefined deve ser retornado.
//   Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

//   Parâmetros:
//     - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
//   Comportamento:
//     - average([2, 2]) // Retorno: 2;
//     - average([1, 1]) // Retorno: 1;
//     - average([1, '2']) // Retorno: undefined;
// */

// // código inicial
// const average = (numArray) => {
//   let result = 0;
//   if (numArray.length < 1) {
//     return undefined;
//   }
//   for (let index = 0; index < numArray.length; index += 1) {
//     if (typeof numArray[index] !== 'number') {
//       return undefined;
//     }
//   }
//   for (let index2 = 0; index2 < numArray.length; index2 += 1) {
//     result += numArray[index2];
//   }
//   result = Math.round(result / numArray.length);
//   return result;
// };

// module.exports = average;

const verifyArray = (array) => {
  if (Array.isArray(array) === false) return undefined;
  for (let number of array) {
    if (typeof number === 'string') return undefined;
  }
  return true;
};
const average = (array) => {
  const status = verifyArray(array);
  if (status === undefined) {
    return undefined;
  }
  const sum = array.reduce((a, b) => a + b, 0);
  const result = Math.round(sum / array.length);
  if (Number.isNaN(result)) return undefined;
  return result;
};
console.log(average([2, '2']));
console.log(average([2, 2]));
console.log(average([0, 0, 0, 0, 0, 0, 1]));
console.log(average([]));
module.exports = average;
