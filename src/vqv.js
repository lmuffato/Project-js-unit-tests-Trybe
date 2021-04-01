/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
    return undefined;
  }
  let result = '';
  const workMessage = 'trabalho na Trybe e mando muito em programação!';
  result = `'Oi, meu nome é ${nome}!
  Tenho ${idade} anos,
  ${workMessage}
  #VQV!'`;
  return result;
};

console.log(vqv('Rodrigo', 24));
module.exports = vqv;
