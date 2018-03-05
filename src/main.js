import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import Create from './components/Create.vue';
import Input from './components/Input.vue';

Vue.use(VueRouter);

Vue.component('mut-input', Input);

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
