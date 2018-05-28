import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import { routes } from '../config';

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

      const currentTournamentId = store.getters['currentTournament/id'];
      if (tournament.id !== currentTournamentId) {
        store.dispatch('currentTournament/set', tournament.id);
      }
    }

    if (to.meta.save) {
      store.dispatch('currentTournament/setProgress', to.path);
    }
  }

  next()
})

export default router
