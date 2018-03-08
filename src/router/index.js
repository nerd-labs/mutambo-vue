import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home.vue'
import create from '../pages/create.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: home },
    { path: '/create', component: create }
  ]
})
