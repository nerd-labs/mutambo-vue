import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import app from './app.vue';

import logo from './components/logo.vue';
import createTeam from './components/create-team.vue';

import router from './router';
import store from './store';

Vue.component('mut-logo', logo);
Vue.component('mut-create-team', createTeam);

Vue.use(Vuetify, {
  theme: {
    primary: "#26A69A",
    secondary: "#00897B",
    accent: "#F50057",
    error: "#FF5252",
    warning: "#FF8F00",
    info: "#29B6F6",
    success: "#00E676"
  }
});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(app),
});
