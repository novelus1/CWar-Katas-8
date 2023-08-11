function getPlanetName(id) {
  const planetNames = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  if (id >= 1 && id <= 8) {
    return planetNames[id - 1];
  } else {
    return null;
  }
}
