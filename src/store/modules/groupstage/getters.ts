import { GetterTree } from 'vuex';

// tslint:disable: no-shadowed-variable
export const getters: GetterTree<any, any> = {
  id: (state) => {
    return state.id;
  },

  tournament: (state, getters, rootState, rootGetters) => {
    return rootGetters.tournamentById(state.id);
  },

  groupstage: (state, getters, rootState, rootGetters) => {
    if (getters.tournament) { return getters.tournament.groupstage; }
  },

  groups: (state, getters) => {
    if (getters.groupstage) { return getters.groupstage.groups; }
  },

  proceedingTeams: (state, getters) => {
    if (getters.groupstage) { return getters.groupstage.proceedingTeams; }
  },
};
