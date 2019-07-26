import Vue from 'vue';
import Vuex from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { currentTournament } from './modules/current-tournament/current-tournament.module';
import { groupstage } from './modules/groupstage/groupstage.module';
import { knockout } from './modules/knockout/knockout.module';
import { league } from './modules/league/league.module';
import { mutations } from './mutations';
import { localStoragePlugin } from './plugins';
import { state } from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  plugins: [
    localStoragePlugin,
  ],
  modules: {
    currentTournament,
    groupstage,
    knockout,
    league,
  },
});
