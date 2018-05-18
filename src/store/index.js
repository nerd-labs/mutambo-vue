import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import plugins from './plugins';
import currentTournament from './modules/current-tournament';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins,
  getters,
  modules: {
    currentTournament: currentTournament
  }
})
