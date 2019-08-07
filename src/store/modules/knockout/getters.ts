import { GetterTree } from 'vuex';

// tslint:disable: no-shadowed-variable
export const getters: GetterTree<any, any> = {
  id: (state) => {
    return state.id;
  },

  tournament: (state, getters, rootState, rootGetters) => {
    return rootGetters.tournamentById(state.id);
  },

  ko: (state, getters) => {
    return getters.tournament.knockout;
  },

  rounds: (state, getters) => {
    if (getters.ko) { return getters.ko.rounds; }
  },

  teams: (state, getters) => {
    if (getters.ko) { return getters.ko.teams; }
  },

  round: (state, getters) => {
    if (getters.ko) { return getters.ko.rounds[getters.activeRoundId]; }
  },

  activeRoundId: (state, getters) => {
    if (getters.ko) { return getters.ko.activeRound.id; }
  },

  activeRoundState: (state, getters) => {
    if (getters.ko) { return getters.ko.activeRound.state; }
  },

  complete: (state, getters) => {
    if (getters.ko) { return getters.ko.done; }
  },

  winner: (state, getters, rootState) => {
    if (getters.ko && getters.tournament.teams && getters.tournament.teams.length) {
      const winningTeam = getters.tournament.teams.find((team: any) => {
        return team.id === getters.ko.winner;
      });
      return winningTeam;
    }
  },
};
