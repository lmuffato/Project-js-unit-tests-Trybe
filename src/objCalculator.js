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

const checkNumbers = (num1, num2) => {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    console.log('Insira números iteiros!');
    return false;
  }
  return true;
};

const calculator = {
  add: (num1, num2) => {
    if (checkNumbers(num1, num2)) {
      return num1 + num2;
    }
    return '';
  },
  mult: (num1, num2) => {
    if (checkNumbers(num1, num2)) {
      return num1 * num2;
    }
    return '';
  },
  div: (num1, num2) => {
    if (checkNumbers(num1, num2)) {
      return Math.trunc(num1 / num2);
    }
    return '';
  },
  sub: (num1, num2) => {
    if (checkNumbers(num1, num2)) {
      return Math.trunc(num1 - num2);
    }
    return '';
  },
};

module.exports = calculator;
