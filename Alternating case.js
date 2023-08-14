String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((element) => {
      if (element === element.toUpperCase()) {
        return element.toLowerCase();
      } else {
        return element.toUpperCase();
      }
    })
    .join("");
};
