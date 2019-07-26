import { ActionTree } from 'vuex';

export const actions: ActionTree<any, any> = {

  deleteTournament({ commit }, tournament) {
    commit('deleteTournament', tournament);
  },

};
