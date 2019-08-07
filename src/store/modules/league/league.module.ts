import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export const league: Module<any, any> = {
  namespaced: true,
  state: {
    id: undefined,
  },
  getters,
  mutations,
  actions,
};
