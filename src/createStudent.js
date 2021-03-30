/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = (nome) => {
  const addPhrase = (phrase) => `Eita pessoa boa!`;
  const student = {
    name: nome,
    feedback: addPhrase
  }
  student.name = nome;
  return student;
};

/* const contaPalavras = (frase) => frase.split(‘ ‘).lenght;
para criar um objeto a partir de um função
const objetoPessoa = (nome, idade) => ({nome: nome, idade:idade})
é preciso colocar o {objeto} dentro de () para o JS não achar que este é o corpo da função */

module.exports = createStudent;
