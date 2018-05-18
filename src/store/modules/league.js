export default {
  namespaced: true,
  state: {
    id: undefined
  },
  getters: {

    id: (state) => {
      return state.id
    },

    league: (state, getters, rootState, rootGetters) => {
      return rootGetters.tournamentById(state.id).league
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

    updateMatchScore(state, { tournament, match }) {
      const index = tournament.league.matches.findIndex(m => m.id === match.id);

      if (index > -1) {
        tournament.league.matches[index] = match;
      }
    },

    addMatches(state, { tournament, matches }) {
      tournament.league.matches = matches;
    }
  },

  actions: {
    complete({ state, rootState, commit }) {
      const tournament = rootState.tournaments.find(t => t.id === state.id);

      if (tournament) {
        commit('complete', tournament);
      } else {
        throw new Error(`Tournament not found`);
      }
    },

    updateMatchScore({ state, rootState, commit }, match) {
      const tournament = rootState.tournaments.find(t => t.id === state.id);

      if (tournament) {
        commit('updateMatchScore', { tournament, match });
      } else {
        throw new Error(`Tournament not found`);
      }
    },

    addMatches({ state, rootState }, matches) {
      const tournament = rootState.tournaments.find(t => t.slug === slug);

      if (tournament) {
        commit('addMatches', {tournament, matches});
      } else {
        throw new Error(`Tournament not found`);
      }
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

