export default {
  id: (state) => {
      return state.id
  },

  tournament: (state, getters, rootState, rootGetters) => {
    return rootGetters.tournamentById(state.id)
  },

  league: (state, getters) => {
    if (getters.tournament) return getters.tournament.league
  },

  matches: (state, getters) => {
    if (getters.league) return getters.league.matches
  },

  completed: (state, getters) => {
    if (getters.league) return getters.league.done
  },

  table: (state, getters) => {
    if (getters.league) return getters.league.table
  }
}
