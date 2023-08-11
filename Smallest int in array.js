class SmallestIntegerFinder {
  findSmallestInt(arrayofNumbers) {
    let smallestNumber;

    for (let i = 0; i < arrayofNumbers.length; i++) {
      const arrNumber = arrayofNumbers[i];

      if (i === 0) {
        smallestNumber = arrNumber;
      }

      if (arrNumber < smallestNumber) {
        smallestNumber = arrNumber;
      }
    }
    return smallestNumber;
  }
}
