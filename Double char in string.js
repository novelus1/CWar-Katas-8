function doubleChar(str) {
  const characters = str.split("");
  const duplicate = characters.map((character) => [character + character]);
  return duplicate.join("");
}
