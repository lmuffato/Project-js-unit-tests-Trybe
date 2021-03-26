const average = (array) => {
  const isNumber = (e) => typeof (e) === 'number';
  if (array.every(isNumber) === false || (array.length !== 0) === false) return undefined;

  let sum = 0;
  for (let index = 0; index < array.length; index += 1) sum += array[index];

  return Math.round(sum / array.length);
};

module.exports = average;
