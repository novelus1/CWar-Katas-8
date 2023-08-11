function getAverage(marks) {
  const count = marks.length;
  let sum = 0;

  for (let i = 0; i < count; i++) {
    sum = sum + marks[i];
  }

  return Math.floor(sum / count);
}
