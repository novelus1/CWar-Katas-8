function solution(str) {
  const arr = str.split("");
  const reversed = arr.reverse();
  const finalAnswer = reversed.join("");
  return finalAnswer;
}
