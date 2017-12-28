import Vue from 'vue';
import VueRouter from 'vue-router';
// import Vuetify from 'vuetify';

// import 'prismjs/prism';
// import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-solarizedlight.css';
// import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import Hello from './components/Hello.vue';
// import Config from './components/Config.vue';

Vue.use(VueRouter);
// Vue.use(Vuetify);

const router = new VueRouter({
  routes: [
    { path: '/', component: Hello },
    // { path: '/config', component:/ Config }
  ]
});

new Vue({
    router,
    el: '#app',
    render: h => h(App),
});
