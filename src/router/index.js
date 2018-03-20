import Vue from 'vue'
import Router from 'vue-router'

import { routes } from '../config';

import home from '../pages/home.vue';
import create from '../pages/create.vue';
import detail from '../pages/detail.vue';
import teams from '../pages/teams.vue';
import random from '../pages/random.vue';
import summary from '../pages/summary.vue';
import league from '../pages/league.vue';

Vue.use(Router)

function buildRouteConfig() {
  let routeConfig = [];

  for(let key in routes) {
    routeConfig.push({
      path: routes[key].fullPath,
      component: routes[key].component,
    });
  }

  return routeConfig;
}

export default new Router({
  routes: buildRouteConfig()
})
