function strCount(str, letter) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      result.push(str[i]);
    }
  }

  return result.length;
}
