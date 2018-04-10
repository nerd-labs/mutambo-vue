import Vue from 'vue'
import Router from 'vue-router'

import { routes } from '../config'

Vue.use(Router)

function buildRouteConfig () {
  let routeConfig = []

  for (let key in routes) {
    routeConfig.push({
      path: routes[key].fullPath,
      component: routes[key].component
    })
  }

  return routeConfig
}

export default new Router({
  routes: buildRouteConfig()
})
