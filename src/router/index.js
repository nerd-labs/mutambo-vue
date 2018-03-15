import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home.vue';
import create from '../pages/create.vue';
import detail from '../pages/detail.vue';
import teams from '../pages/teams.vue';
import summary from '../pages/summary.vue';
import league from '../pages/league.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: home },
    { path: '/create', component: create },
    { path: '/detail/:slug', component: detail },
    { path: '/teams/:slug', component: teams },
    { path: '/summary/:slug', component: summary },
    { path: '/league/:slug', component: league },
  ]
})
