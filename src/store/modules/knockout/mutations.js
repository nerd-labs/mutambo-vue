export default {
  set(state, tournamentId) {
    state.id = tournamentId
  },

  reset(state) {
    state.id = undefined
  },

  generate(state, { tournament, matches }) {
    tournament.knockout.rounds.push(matches);
  }
}
