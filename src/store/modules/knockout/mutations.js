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
    tournament.knockout.activeRound = round;
  },

  updateMatchScore(state, { tournament, roundIndex, matchIndex, match }) {
    if (matchIndex > -1) {
      tournament.knockout.rounds[roundIndex][matchIndex] = match;
    }
  },

  complete(state, { tournament, roundIndex, done}) {
    tournament.knockout.activeRoundId++;

    console.log('done', done);
    if (done) tournament.knockout.done = done;
  },
}
