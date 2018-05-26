import { matchStates, matchWinner } from "../../config";

export default {
  namespaced: true,
  state: {
    id: undefined
  },
  getters: {

    id: (state) => {
      return state.id
    },

    tournament: (state, getters, rootState, rootGetters) => {
      return rootGetters.tournamentById(state.id)
    },

    league: (state, getters) => {
      if (getters.tournament) return getters.tournament.league
    },

    matches: (state, getters) => {
      if (getters.league) return getters.league.matches
    },

    completed: (state, getters) => {
      if (getters.league) return getters.league.done
    },

    table: (state, getters) => {
      if (getters.league) return getters.league.table
    },
  },
  mutations: {
    set(state, tournamentId) {
      state.id = tournamentId
    },

    reset(state) {
      state.id = undefined
    },

    complete(state, tournament) {
      tournament.league.done = true;
    },

    updateMatchScore(state, { tournament, matchIndex, match }) {
      if (matchIndex > -1) {
        tournament.league.matches[matchIndex] = match;
      }
    },

    addMatches(state, { tournament, matches }) {
      tournament.league.matches = matches;
    },

    updateTable(state, { tournament, table }) {
      tournament.league.table = table;
    }
  },

  actions: {
    complete({ commit, getters }) {
      const tournament = getters.tournament;

      commit('complete', tournament);
    },

    updateMatchScore({ commit, getters }, match) {
      const tournament = getters.tournament;
      const matchIndex = tournament.league.matches.findIndex(m => m.id === match.id);

      commit('updateMatchScore', { tournament, matchIndex, match });
    },

    addMatches({ commit, getters }, matches) {
      const tournament = getters.tournament;

      commit('addMatches', {tournament, matches});
    },

    updateTable({ commit, getters }) {
      const tournament = getters.tournament;

      const completedMatches = tournament.league.matches.filter((match) => {
        return match.state === matchStates.DONE;
      });

      const table = [];

      tournament.teams.forEach((team) => {
        table.push({
          id: team.id,
          club: team.club,
          player: team.player,
          stats: {
            won: 0,
            draw: 0,
            lost: 0,
            played: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,
            points: 0,
          }
        });
      });

      completedMatches.forEach((match) => {
        const homeIndex = table.findIndex((team) => {
          return team.id === match.home.id;
        });

        const awayIndex = table.findIndex((team) => {
          return team.id === match.away.id;
        });

        table[homeIndex].stats.goalsFor += match.home.score;
        table[homeIndex].stats.goalsAgainst += match.away.score;

        table[awayIndex].stats.goalsFor += match.away.score;
        table[awayIndex].stats.goalsAgainst += match.home.score;

        table[homeIndex].stats.played += 1;
        table[awayIndex].stats.played += 1;

        table[homeIndex].stats.goalDifference = table[homeIndex].stats.goalsFor - table[homeIndex].stats.goalsAgainst;
        table[awayIndex].stats.goalDifference = table[awayIndex].stats.goalsFor - table[awayIndex].stats.goalsAgainst;

        switch (match.winner) {
          case matchWinner.HOME:
            table[homeIndex].stats.won += 1;
            table[homeIndex].stats.points += 3;

            table[awayIndex].stats.lost += 1;

            break;

          case matchWinner.AWAY:
            table[awayIndex].stats.won += 1;
            table[awayIndex].stats.points += 3;

            table[homeIndex].stats.lost += 1;

            break;

          case matchWinner.TIE:
            table[homeIndex].stats.draw += 1;
            table[homeIndex].stats.points += 1;

            table[awayIndex].stats.draw += 1;
            table[awayIndex].stats.points += 1;

            break;
        }
      });

      commit('updateTable', { tournament, table });
    },

    updateMatch({ commit, dispatch, state }, match) {

      dispatch('updateMatchScore', match);

      dispatch('updateTable');
    },
  }
}

