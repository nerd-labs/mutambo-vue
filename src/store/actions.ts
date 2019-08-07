import { ActionTree } from 'vuex';
import { RootState } from './state';

export const actions: ActionTree<RootState, RootState> = {

  deleteTournament({ commit }, tournament) {
    commit('deleteTournament', tournament);
  },

};
