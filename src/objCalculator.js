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
const calculator = (num1, num2) => {
  calculator = {
    add: num1 + num2,
    sub: num1 - num2,
    mult: num1 * num2,
    div: num1 / num2,
  };
  return `Adiçâo: ${calculator.add}
  Subtração: ${calculator.sub}
  Mutiplicação: ${calculator.mult}
  Divisâo: ${Math.floor(calculator.div)}`;
};
const chamaFunction = (calculator(4, 2));
console.log(chamaFunction);

module.exports = calculator;
