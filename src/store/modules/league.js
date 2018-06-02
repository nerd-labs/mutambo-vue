import { matchStates, matchWinner } from "../../config";
import { getTable } from '../../helpers/table';

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
    },

    table: (state, getters) => {
      if (getters.league) return getters.league.table
    },
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
    },

    updateTable(state, { tournament, table }) {
      tournament.league.table = table;
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

    updateTable({ commit, getters }) {
      const tournament = getters.tournament;

      const completedMatches = tournament.league.matches.filter((match) => {
        return match.state === matchStates.DONE;
      });

      const table = getTable(tournament.teams, completedMatches);

      commit('updateTable', { tournament, table });
    },

    updateMatch({ commit, dispatch, state }, match) {

      dispatch('updateMatchScore', match);

      dispatch('updateTable');
    },
  }
}
