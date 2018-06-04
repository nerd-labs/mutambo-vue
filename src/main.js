import Vue from 'vue';
import app from './app.vue';

import logo from './components/logo.vue';
import createTeam from './components/create-team.vue';
import match from './components/match.vue';
import matches from './components/matches.vue';
import knockoutMatch from './components/knockout-match.vue';
import table from './components/table.vue';

import router from './router';
import store from './store';

import './style/style.css';

Vue.component('mut-logo', logo);
Vue.component('mut-create-team', createTeam);
Vue.component('mut-match', match);
Vue.component('mut-matches', matches);
Vue.component('mut-knockout-match', knockoutMatch);
Vue.component('mut-table', table);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(app),
});
