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

/* Lembrar que colocar "!" antes do atributo
é o mesmo que dizer "sem o atributo".
Ex: "!nome" = "sem nome". */

const vqv = (nome, idade) => {
  if(!nome || !idade) {
    return undefined;
  }
  const paragraph = `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`;
  return paragraph;
};

module.exports = vqv;
