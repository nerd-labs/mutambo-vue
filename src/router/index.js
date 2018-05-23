import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import { routes } from '../config';

import home from '../pages/home.vue';
import create from '../pages/create.vue';
import detail from '../pages/detail.vue';
import teams from '../pages/teams.vue';
import random from '../pages/random.vue';
import summary from '../pages/summary.vue';
import league from '../pages/league.vue';

Vue.use(VueRouter)

function buildRouteConfig() {
  let routeConfig = [];

  for (let key in routes) {
    routeConfig.push({
      path: routes[key].fullPath,
      component: routes[key].component,
      meta: routes[key].meta
    });
  }

  return routeConfig;
}

const router = new VueRouter({
  routes: buildRouteConfig()
})

router.beforeEach((to, from, next) => {
  if (to.meta) {
    if (to.meta.fetchCurrentTournament) {
      const tournament = store.getters.tournamentBySlug(to.params.slug)

      if (Object.keys(tournament).length === 0) {
        next('/')
      }

      store.dispatch('currentTournament/set', tournament.id);
    }

    if (to.meta.save) {
      store.dispatch('currentTournament/setProgress', to.path);
    }
  }

  next()
})

export default router
