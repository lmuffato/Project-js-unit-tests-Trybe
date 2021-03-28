const average = (numbersArray) => {
  const filtering = numbersArray.filter((number) => typeof number !== 'number');
  if (numbersArray.length === 0 || filtering.length > 0) {
    return undefined;
  }
  const averageNumber = numbersArray.reduce((acc, currentValue) => acc + currentValue);
  return Math.round(averageNumber / numbersArray.length);
};

module.exports = average;
