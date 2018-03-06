import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import Home from './components/Home.vue';
import Logo from './components/Logo.vue';
import Create from './components/Create.vue';

Vue.component('mut-logo', Logo);

Vue.use(VueRouter);
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

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/create', component: Create }
  ]
});

new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
