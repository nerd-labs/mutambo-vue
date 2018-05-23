export default {
  set(state, tournamentId) {
    state.id = tournamentId
  },

  reset(state) {
    state.id = undefined
  },

  generate(state, { tournament, rounds }) {
    tournament.knockout.rounds = rounds;
  }
}
