const round = (num, places) => {
	return +(parseFloat(num).toFixed(places))
}
console.log(round(28.25999999999, 2))