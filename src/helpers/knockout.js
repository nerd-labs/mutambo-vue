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

export function getRoundName(matches) {
  switch (matches) {
    case 1:
      return 'Final';
    case 2:
      return 'Semi-Final';
    case 4:
      return 'Quarter Final';
    case 8:
      return 'Round of 16';
    case 16:
      return 'Round of 32';
    default:
      throw new Error('Number of rounds is not valid');
  }
}
