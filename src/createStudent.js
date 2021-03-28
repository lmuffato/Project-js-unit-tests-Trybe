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

const createStudent = (nome) => ({
  // Se não especificar a chave, a chave terá o mesmo nome do valor
  name: nome,
  feedback: () => 'Eita pessoa boa!',
});

module.exports = createStudent;

// const estudante = createStudent('Lucas')
// console.log( estudante )
// console.log( estudante.name )
// console.log( estudante.feedback() )
