export default {
  set(state, tournamentId) {
    state.id = tournamentId
  },

  reset(state) {
    state.id = undefined
  },

  generate(state, { tournament, rounds }) {
    tournament.knockout.rounds = rounds;
  },

  setRound(state, { tournament, round }) {
    tournament.knockout.activeRound.id = round;
    tournament.knockout.activeRound.state = 0;
  },

  startRound(state, {tournament}) {
    tournament.knockout.activeRound.state = 1;
  },

  updateMatchScore(state, { tournament, roundIndex, matchIndex, match }) {
    if (matchIndex > -1) {
      tournament.knockout.rounds[roundIndex][matchIndex] = match;
    }
  },

  complete(state, { tournament, roundIndex, done}) {
    tournament.knockout.done = done;
  },

  setWinner(state, {tournament, winningTeamId}) {
    tournament.knockout.winner = winningTeamId;
  }
}
