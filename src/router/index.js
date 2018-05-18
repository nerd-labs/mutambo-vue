import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import { routes } from '../config';

Vue.use(VueRouter)

function buildRouteConfig () {
  let routeConfig = []

  for (let key in routes) {
    routeConfig.push({
      path: routes[key].fullPath,
      component: routes[key].component,
      meta: routes[key].meta
    });
  }

  return routeConfig
}

const router = new VueRouter({
  routes: buildRouteConfig()
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.fetchCurrentTournament) {
    let tournament = store.getters.tournamentBySlug(to.params.slug)

    if (Object.keys(tournament).length === 0) {
      next('/')
    }

    store.commit('currentTournament/set', tournament.id)
  }

  next()
})

export default router
