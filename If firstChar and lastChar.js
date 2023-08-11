function feast(beast, dish) {
  if (
    typeof beast === "string" &&
    typeof dish === "string" &&
    beast.charAt(0) === dish.charAt(0) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  ) {
    return true;
  } else {
    return false;
  }
}
