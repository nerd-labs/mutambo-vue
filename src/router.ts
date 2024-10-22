import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store/store';

Vue.use(Router);

export enum Routes {
  Home = '/',
  Create = '/create',
  Detail = '/detail',
}

const router = new Router({
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
    {
      path: '/detail/:slug',
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ './views/Detail.vue'),
      meta: {
        save: true,
        fetchCurrentTournament: true,
      },
    },
    {
      path: '/teams/:slug',
      name: 'teams',
      component: () => import(/* webpackChunkName: "teams" */ './views/Teams.vue'),
      meta: {
        save: true,
        fetchCurrentTournament: true,
      },
    },
    {
      path: '/random/:slug',
      name: 'random',
      component: () => import(/* webpackChunkName: "random" */ './views/Random.vue'),
      meta: {
        fetchCurrentTournament: true,
      },
    },
    {
      path: '/league/:slug',
      name: 'league',
      component: () => import(/* webpackChunkName: "league" */ './views/League.vue'),
      meta: {
        save: true,
        fetchCurrentTournament: true,
      },
    },
    {
      path: '/groupstage/draw/:slug',
      name: 'groupstage',
      component: () => import(/* webpackChunkName: "groupstage" */ './views/GroupstageDraw.vue'),
      meta: {
        save: true,
        fetchCurrentTournament: true,
      },
    },
    {
      path: '/groupstage/:slug',
      name: 'groupstage',
      component: () => import(/* webpackChunkName: "groupstage" */ './views/Groupstage.vue'),
      meta: {
        save: true,
        fetchCurrentTournament: true,
      },
    },
    {
      path: '/knockout/:slug',
      name: 'knockout',
      component: () => import(/* webpackChunkName: "knockout" */ './views/Knockout.vue'),
      meta: {
        save: true,
        fetchCurrentTournament: true,
      },
    },
    {
      path: '/results/:slug',
      name: 'results',
      component: () => import(/* webpackChunkName: "results" */ './views/Results.vue'),
      meta: {
        save: true,
        fetchCurrentTournament: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta) {
    if (to.meta.fetchCurrentTournament) {
      const tournament = store.getters.tournamentBySlug(to.params.slug);

      if (Object.keys(tournament).length === 0 && !to.meta.forceRoute) {
        next('/');
      }

      const currentTournamentId = store.getters['currentTournament/id'];
      if (tournament.id !== currentTournamentId && !to.meta.forceRoute) {
        store.dispatch('currentTournament/set', tournament.id);
      }
    }

    if (to.meta.save) {
      store.dispatch('currentTournament/setProgress', to.path);
    }
  }

  next();
});

export default router;
