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

    totalTeams: (state, getters) => {
      return getters.teams.length
    },

    matchList: (state, getters) => {
      return getters.tournament.matches
    },

    numberOfPlays: (state, getters) => {
      if (getters.tournament.details) {
        return getters.tournament.details.numberOfPlays
      }
    }
  },
  mutations: {
    set (state, tournamentId) {
      state.id = tournamentId
    },

    reset (state) {
      state.id = undefined
    },

    updateDetails (state, { tournament, details }) {
      tournament.details = Object.assign({}, tournament.details, details)
    },

    randomizeTeams (state, { tournament, randomizedTeams }) {
      tournament.teams = randomizedTeams
    },

    addTeam (state, { tournament, team }) {
      if (!tournament.teams) tournament.teams = []
      const index = tournament.teams.findIndex(t => t.id === team.id)

      if (index < 0) {
        tournament.teams.push(team)
      } else {
        tournament.teams[index] = team
      }
    }
  },

  actions: {
    updateDetails ({ commit, state, rootState }, details) {
      const tournament = rootState.tournaments.find(t => t.id === state.id)
      if (tournament) {
        commit('updateDetails', {
          tournament,
          details
        })
      }
    },

    randomizeTeams ({ commit, state, rootState }, randomizedTeams) {
      const tournament = rootState.tournaments.find(t => t.id === state.id)
      if (tournament) {
        commit('randomizeTeams', {
          tournament,
          randomizedTeams
        })
      }
    },

    addTeam ({ commit, state, rootState }, team) {
      const tournament = rootState.tournaments.find(t => t.id === state.id)

      if (tournament) {
        commit('addTeam', {
          tournament,
          team
        })
      }
    }
  }
}
