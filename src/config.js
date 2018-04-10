import home from './pages/home.vue';
import create from './pages/create.vue';
import detail from './pages/detail.vue';
import teams from './pages/teams.vue';
import summary from './pages/summary.vue';
import league from './pages/league.vue';

export const matchStates = {
  NONE: '',
  PLAYING: 'playing',
  DISABLED: 'disabled',
  DONE: 'done',
};

export const routes = {
  HOME: {
    path: '',
    fullPath: '/',
    component: home,
  },
  CREATE: {
    path: 'create',
    fullPath: '/create/',
    component: create,
  },
  DETAIL: {
    path: 'detail',
    fullPath: '/:type/detail/:slug',
    component: detail,
    save: true,
  },
  TEAMS: {
    path: 'teams',
    fullPath: '/:type/teams/:slug',
    component: teams,
    save: true,
  },
  SUMMARY: {
    path: 'summary',
    fullPath: '/:type/summary/:slug',
    component: summary,
    save: true,
  },
  LEAGUE: {
    path: 'league',
    fullPath: '/league/:slug',
    component: league,
    save: true,
  },
};
