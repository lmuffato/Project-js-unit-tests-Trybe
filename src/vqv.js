const vqv = (nome, idade) => {
  let value;
  if ((nome || idade) !== undefined) {
    value = `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
  return value;
};
module.exports = vqv;
