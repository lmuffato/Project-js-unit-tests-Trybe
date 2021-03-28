/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (numberOne, numberTwo) => {
    let sum = numberOne + numberTwo;
    return Math.trunc(sum);
  },
  mult: (numberOne, numberTwo) => {
    let multiplication = numberOne * numberTwo;
    return Math.trunc(multiplication);
  },
  div: (numberOne, numberTwo) => {
    let division = numberOne / numberTwo;
    return Math.trunc(division);
  },
  sub: (numberOne, numberTwo) => {
    let subtraction = numberOne - numberTwo;
    return Math.trunc(subtraction);
  },
};

module.exports = calculator;
//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
