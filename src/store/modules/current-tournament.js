export default {
  namespaced: true,
  state: {
    id: undefined
  },
  getters: {

    id: (state) => {
      return state.id
    },

    tournament: (state, getters, rootState, rootGetters) => {
      return rootGetters.tournamentById(state.id)
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
      return getters.tournament.teams
    },

    matchList: (state, getters) => {
      return getters.tournament.matches
    },

    details: (state, getters) => {
      return getters.tournament.details || {}
    },

    numberOfPlays: (state, getters) => {
      return getters.details.numberOfPlays
    }
  },
  mutations: {
    set(state, tournamentId) {
      state.id = tournamentId
    },

    reset(state) {
      state.id = undefined
    },
  },

  actions: {
    updateDetails ({ commit, getters, rootState }, details) {
      const payload = Object.assign({}, {
        id: getters.id
      }, details)

      commit('updateDetails', payload, { root: true })
    }
  }
}
