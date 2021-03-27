const average = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    }
  }

  if (array.length <= 0) {
    return undefined;
  }

  let total = array.reduce((acc, num) => {
    acc += num;
    return acc;
  });
  let result = Math.round(total / array.length);

  return result;
};

module.exports = average;
