export default {
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
    if (getters.ko) return getters.ko.rounds;
  },

  round: (state, getters) => {
    if (getters.ko) return getters.ko.rounds[getters.activeRoundId];
  },

  activeRoundId: (state, getters) => {
    if (getters.ko) return getters.ko.activeRound;
  },
}
