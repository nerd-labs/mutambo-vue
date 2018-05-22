import home from './pages/home.vue';
import create from './pages/create.vue';
import detail from './pages/detail.vue';
import teams from './pages/teams.vue';
import summary from './pages/summary.vue';
import league from './pages/league.vue';
import random from './pages/random.vue';
import results from './pages/results.vue';

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
    fullPath: '/detail/:slug',
    component: detail,
    meta: {
      save: true,
      fetchCurrentTournament: true
    }
  },
  RANDOM: {
    path: 'random',
    fullPath: '/random/:slug',
    component: random,
    meta: {
      fetchCurrentTournament: true
    }
  },
  TEAMS: {
    path: 'teams',
    fullPath: '/teams/:slug',
    component: teams,
    meta: {
      save: true,
      fetchCurrentTournament: true
    }
  },
  SUMMARY: {
    path: 'summary',
    fullPath: '/summary/:slug',
    component: summary,
    meta: {
      save: true,
      fetchCurrentTournament: true
    }
  },
  LEAGUE: {
    path: 'league',
    fullPath: '/league/:slug',
    component: league,
    meta: {
      save: true,
      fetchCurrentTournament: true
    }
  },
  RESULTS: {
    path: 'results',
    fullPath: '/results/:slug',
    component: results,
    meta: {
      fetchCurrentTournament: true
    }
  }
}
