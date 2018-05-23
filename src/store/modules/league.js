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

    league: (state, getters) => {
      if (getters.tournament) return getters.tournament.league
    },

    matches: (state, getters) => {
      if (getters.league) return getters.league.matches
    },

    completed: (state, getters) => {
      if (getters.league) return getters.league.done
    }


  },
  mutations: {
    set(state, tournamentId) {
      state.id = tournamentId
    },

    reset(state) {
      state.id = undefined
    },

    complete(state, tournament) {
      tournament.league.done = true;
    },

    updateMatchScore(state, { tournament, matchIndex, match }) {
      if (matchIndex > -1) {
        tournament.league.matches[matchIndex] = match;
      }
    },

    addMatches(state, { tournament, matches }) {
      tournament.league.matches = matches;
    }
  },

  actions: {
    complete({ commit, getters }) {
      const tournament = getters.tournament;

      commit('complete', tournament);
    },

    updateMatchScore({ commit, getters }, match) {
      const tournament = getters.tournament;
      const matchIndex = tournament.league.matches.findIndex(m => m.id === match.id);

      commit('updateMatchScore', { tournament, matchIndex, match });
    },

    addMatches({ commit, getters }, matches) {
      const tournament = getters.tournament;

      commit('addMatches', {tournament, matches});
    },

    updateMatch({ commit, dispatch, state }, match) {

      dispatch('updateMatchScore', match);

      commit('updateTeamStat', {
        teamId: match.home.id,
        score: match.home.score,
        scoreOpponent: match.away.score,
        id: state.id
      }, {
        root: true
      });

      commit('updateTeamStat', {
        teamId: match.away.id,
        score: match.away.score,
        scoreOpponent: match.home.score,
        id: state.id
      }, {
        root: true
      });
    },
  }
}

