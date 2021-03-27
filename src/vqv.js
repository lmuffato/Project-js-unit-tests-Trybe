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
  let message;
  if (nome === undefined || idade === undefined) {
    return message;
  }
  message = `Oi, meu nome é ${nome}!\n`;
  message += `Tenho ${idade} anos,\n`;
  message += 'trabalho na Trybe e mando muito em programação!\n';
  message += '#VQV!';
  return message;
};

module.exports = vqv;
