const average = (arr) => {
  let array = arr;
  if (typeof array !== 'object') {
    return undefined;
  }
  if (array.length === 0) {
    return undefined;
  }
  if (array.some((e) => typeof e !== 'number')) {
    return undefined;
  }
  return Math.round(array.reduce((acc, cur) => acc + cur, 0) / arr.length);
};

module.exports = average;
