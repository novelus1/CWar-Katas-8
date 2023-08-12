function grow(x) {
  let multiplicationResult = 1;
  for (let i = 0; i < x.length; i++) {
    multiplicationResult *= x[i];
  }
  return multiplicationResult;
}
