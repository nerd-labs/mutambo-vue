import { matchStates } from '../config';

function getTable(teams, reverseFixtures, useDummy = false, dummy = {}) {
  if (!Array.isArray(teams)) {
    teams = Array.from({ length: teams }).map((_, i) => i)
  } else {
    teams = [...teams] // copy array to avoid side effects
  }

  if (teams.length % 2 !== 0) {
    teams.push(dummy)
  }

  const n = teams.length
  const numberOfRounds = n - 1
  const gamesPerRound = n / 2

  let columnA = teams.slice(0, gamesPerRound)
  let columnB = teams.slice(gamesPerRound)
  const fixed = teams[0]

  const matches = Array.from({length: numberOfRounds}).map((_, i) => {
    let gameCount = 1

    let round = Array.from({length: gamesPerRound}).reduce((acc, _, k) => {
      if (useDummy || (columnA[k] !== dummy && columnB[k] !== dummy)) {
        acc.push({
          round: i + 1,
          game: gameCount,
          home: reverseFixtures ? columnB[k] : columnA[k],
          away: reverseFixtures ? columnA[k] : columnB[k],
          state: matchStates.NONE
        })

        gameCount++
      }

      return acc
    }, [])

    // rotate elements
    columnA = [fixed, columnB.shift(), ...columnA.slice(1)]
    columnB.push(columnA.pop())
    return round
  });

  const flattendMatches = [].concat.apply([], matches);

  return flattendMatches;
}

export default {
  getTable: getTable
}
