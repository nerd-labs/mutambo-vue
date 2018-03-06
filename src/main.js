import Vue from 'vue';
import VueRouter from 'vue-router';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import Home from './components/Home.vue';
import Create from './components/Create.vue';

Vue.use(VueRouter);
Vue.use(Vuetify);

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
