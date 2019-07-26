import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export enum Routes {
  Home = '/',
  Create = '/create',
  Detail = '/detail',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: Routes.Home,
      name: 'home',
      component: Home,
    },
    {
      path: Routes.Create,
      name: 'create',
      component: () => import(/* webpackChunkName: "create" */ './views/Create.vue'),
      meta: {
        forceRoute: true,
        fetchCurrentTournament: true,
      },
    },
  ],
});
