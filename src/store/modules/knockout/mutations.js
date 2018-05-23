export default {
  set(state, tournamentId) {
    state.id = tournamentId
  },

  reset(state) {
    state.id = undefined
  },
}
