function squareSum(numbers) {
  let sumOfArray = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfArray += numbers[i] * numbers[i];
  }
  return sumOfArray;
}
