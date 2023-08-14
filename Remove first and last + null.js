function array(string) {
  const arr = string.split(",");
  arr.pop();
  arr.shift();
  if (arr.length <= 0) {
    return null;
  } else {
    return arr.join(" ");
  }
}
