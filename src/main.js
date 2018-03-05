import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import Logo from './components/Logo.vue';

Vue.component('mut-logo', Logo);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
  ]
});

new Vue({
    router,
    el: '#app',
    render: h => h(App),
});
