export default {
  id: (state) => {
    return state.id
  },

  tournament: (state, getters, rootState, rootGetters) => {
    if (state.id) {
      return rootGetters.tournamentById(state.id)
    } else {
      return {}
    }
  },

  page: (state, getters) => {
    return getters.tournament.page
  },

  name: (state, getters) => {
    return getters.tournament.name
  },

  type: (state, getters) => {
    return getters.tournament.type
  },

  slug: (state, getters) => {
    return getters.tournament.slug
  },

  teams: (state, getters) => {
    if (getters.tournament.teams)
      return getters.tournament.teams
  },

  totalTeams: (state, getters) => {
    if (getters.tournament.teams) return getters.tournament.teams.length;
  },

  matchList: (state, getters) => {
    return getters.tournament.matches
  },

  numberOfPlays: (state, getters) => {
    if (getters.tournament.details) {
      return getters.tournament.details.numberOfPlays
    }
  },

  numberOfProceedingPlayers: (state, getters) => {
    if (getters.tournament.details) {
      return getters.tournament.details.numberOfProceedingPlayers
    }
  }
}
