const average = (arr) => {
  let sum = 0;
  if (arr.length < 1) { return undefined; }
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof arr[index] !== 'number') {
      return undefined;
    }
    sum += (arr[index] / arr.length);
  }
  return Math.round(sum);
};

module.exports = average;
