const average = (arrayNumbers) => {
  let result = 0;
  if (arrayNumbers.length === 0) {
    return undefined;
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (typeof (arrayNumbers[index]) !== 'number') {
      return undefined;
    }
    result += Math.round((arrayNumbers[index])) / arrayNumbers.length;
  }
  return result;
};

console.log(average([2, 2]));
console.log(average([1, '2']));
console.log(average([1, 5, 8]));
console.log(average([1, '']));
console.log(average([]));

module.exports = average;
