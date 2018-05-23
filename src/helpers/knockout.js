export function calculateTotalRounds(teams) {
  switch (teams) {
    case 2:
      return 1;
    case 4:
      return 2;
    case 8:
      return 3;
    case 16:
      return 4;
    case 32:
      return 5;
    default:
      throw new Error('Number of teams is not valid');
  }
}
