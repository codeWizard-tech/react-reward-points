export const CalculateRewards = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += 2 * (amount - 100);
      amount = 100;
    }
    if (amount > 50) {
      points += 1 * (amount - 50);
    }
    return points;
};