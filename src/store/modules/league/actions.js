import { matchStates, matchWinner } from "../../../config";
import { getTable } from '../../../helpers/table';

export default {
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
  }
}
