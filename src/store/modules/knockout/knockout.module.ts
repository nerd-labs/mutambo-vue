import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { Module } from 'vuex';

export const knockout: Module<any, any> = {
  namespaced: true,
  state: {
    id: undefined,
  },
  getters,
  mutations,
  actions,
};
