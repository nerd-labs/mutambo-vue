import { matchStates } from '../config';
import { IdGenerator } from './id-generator';

export function getTable(teams: any, reverseFixtures: any, useDummy = false, dummy = {}) {
  if (!Array.isArray(teams)) {
    teams = Array.from({ length: teams }).map((_, i) => i);
  }

  if (teams.length % 2 !== 0) {
    teams.push(dummy);
  }

  const n = teams.length;
  const numberOfRounds = n - 1;
  const gamesPerRound = n / 2;

  let columnA = teams.slice(0, gamesPerRound);
  const columnB = teams.slice(gamesPerRound);
  const fixed = teams[0];

  const matches: any[] = Array.from({ length: numberOfRounds }).map((_, i) => {
    let gameCount = 1;

    const round = Array.from({ length: gamesPerRound }).reduce((acc: any, __: any, k: any) => {
      if (useDummy || (columnA[k] !== dummy && columnB[k] !== dummy)) {
        acc.push({
          round: i + 1,
          game: gameCount,
          home: JSON.parse(JSON.stringify(reverseFixtures ? columnB[k] : columnA[k])),
          away: JSON.parse(JSON.stringify(reverseFixtures ? columnA[k] : columnB[k])),
          state: matchStates.NONE,
          id: IdGenerator.id(),
        });

        gameCount++;
      }

      return acc;
    }, []);

    // rotate elements
    columnA = [fixed, columnB.shift(), ...columnA.slice(1)];
    columnB.push(columnA.pop());
    return round;
  });

  const flattendMatches = [].concat.apply([], matches);

  return flattendMatches;
}
