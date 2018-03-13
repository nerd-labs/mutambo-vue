import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import plugins from './plugins';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  plugins,
  getters
})
