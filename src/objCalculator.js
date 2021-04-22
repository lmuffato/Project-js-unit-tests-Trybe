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

const objCalculator = (numb1, numb2) =>{
  const adicao =  math.trunc(numb1 + numb2);
  const mul =  math.trunc(numb1 * numb2);
  const divi =  math.trunc(numb1 / numb2);
  const subt =  math.trunc(numb1 - numb2);
};
  const calculator = {
    add: adicao,
    mult: mul,
    div: divi,
    sub: subt
  };



module.exports = calculator;
