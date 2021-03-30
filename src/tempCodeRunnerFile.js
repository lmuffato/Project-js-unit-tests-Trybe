const average = (numbers) => {
  let soma = 0;
  // for (let i = 0; i < numbers.length; i += 1) {
  //  if (numbers.length === 0 || ((typeof (numbers[i] !== 'number')))) {
  //  return ('undefined');
  //  }
  // }
  for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers;
  }
  console.log(soma);
  // return (Math.round(soma / numbers.length));
};

average([4, 6]);

module.exports = average;
let name = 'priscila';

console.log(name);