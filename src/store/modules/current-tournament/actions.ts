import { ActionTree } from 'vuex';

export const actions: ActionTree<any, any> = {
  set({ commit }, tournamentId) {
    commit('set', tournamentId);

    commit('league/set', tournamentId, {
      root: true,
    });

    commit('knockout/set', tournamentId, {
      root: true,
    });

    commit('groupstage/set', tournamentId, {
      root: true,
    });
  },

  reset({ commit }) {
    commit('reset');

    commit('league/reset', null, {
      root: true,
    });

    commit('knockout/reset', null, {
      root: true,
    });

    commit('groupstage/reset', null, {
      root: true,
    });
  },

  updateDetails({ commit, state, rootState }, details) {
    const tournament = rootState.tournaments.find((t: any) => t.id === state.id);
    if (tournament) {
      commit('updateDetails', {
        tournament,
        details,
      });
    }
  },

  addEmptyTeams({ commit, state, rootState }, teams) {
    const tournament = rootState.tournaments.find((t: any) => t.id === state.id);
    if (tournament) {
      commit('addEmptyTeams', {
        tournament,
        teams,
      });
    }
  },

  randomizeTeams({ commit, state, rootState }, randomizedTeams) {
    const tournament = rootState.tournaments.find((t: any) => t.id === state.id);
    if (tournament) {
      commit('randomizeTeams', {
        tournament,
        randomizedTeams,
      });
    }
  },

  addTeam({ commit, state, rootState }, team) {
    const tournament = rootState.tournaments.find((t: any) => t.id === state.id);
    if (tournament) {
      commit('addTeam', {
        tournament,
        team,
      });
    }
  },

  setProgress({ state, getters, commit }, page) {
    const tournament = getters.tournament;
    commit('setProgress', {
      tournament,
      page,
    });
  },
};
