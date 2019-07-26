import { matchStates } from '@/store/config';
import { getTable } from '@/store/helpers/table';
import { ActionTree } from 'vuex';

export const actions: ActionTree<any, any> = {
  complete({ commit, getters }) {
    const tournament = getters.tournament;

    commit('complete', tournament);
  },

  updateMatchScore({ commit, getters }, match) {
    const tournament = getters.tournament;
    const matchIndex = tournament.league.matches.findIndex((m: any) => m.id === match.id);

    commit('updateMatchScore', { tournament, matchIndex, match });
  },

  addMatches({ commit, getters }, matches) {
    const tournament = getters.tournament;

    commit('addMatches', { tournament, matches });
  },

  updateTable({ commit, getters }) {
    const tournament = getters.tournament;

    const completedMatches = tournament.league.matches.filter((match: any) => {
      return match.state === matchStates.DONE;
    });

    const table = getTable(tournament.teams, completedMatches);

    commit('updateTable', { tournament, table });
  },

  updateMatch({ commit, dispatch, state }, match) {

    dispatch('updateMatchScore', match);

    dispatch('updateTable');
  },
};
