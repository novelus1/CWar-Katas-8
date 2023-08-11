const rps = (p1, p2) => {
  const outcome = {
    rock: {
      rock: "Draw!",
      paper: "Player 2 won!",
      scissors: "Player 1 won!",
    },
    paper: {
      rock: "Player 1 won!",
      paper: "Draw!",
      scissors: "Player 2 won!",
    },
    scissors: {
      rock: "Player 2 won!",
      paper: "Player 1 won!",
      scissors: "Draw!",
    },
  };

  return outcome[p1][p2];
};
