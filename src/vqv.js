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
// Código feito com ajuda do Viana
// Link: https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
const vqv = (nome, idade) => {
  let resposta = undefined;
  let mensagem;

  if (!nome && !idade) {
    return resposta;
  }

  mensagem = `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`

  return mensagem;
};

module.exports = vqv;
