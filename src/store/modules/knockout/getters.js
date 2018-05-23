export default {
  id: (state) => {
    return state.id
  },

  ko: (state, getters, rootState, rootGetters) => {
    return rootGetters.tournamentById(state.id).knockout
  },

  rounds: (state, getters) => {
    return getters.ko.rounds
  },
}
