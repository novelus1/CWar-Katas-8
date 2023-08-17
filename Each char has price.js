function billboard(name, price = 30) {
  const arr = name.split("");
  let totalCost = 0;

  arr.forEach((element) => {
    totalCost += price;
  });

  return totalCost;
}
