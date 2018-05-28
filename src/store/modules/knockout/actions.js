import { generateMatch } from '../../../helpers/match';
import { calculateTotalRounds } from '../../../helpers/knockout';

export default {
  generate({ commit, getters }) {
    const tournament = getters.tournament;
    const teams = tournament.teams;

    const shuffeledTeams = JSON.parse(JSON.stringify(teams.sort((a, b) => 0.5 - Math.random())));
    const totalRounds = calculateTotalRounds(teams.length);

    const rounds = Array.from({ length: totalRounds }).map((round, i) => {
      const matches = teams.length / Math.pow(2, totalRounds - (i + 1));

      // create empty matches
      return Array.from({ length: matches / 2 }).map(i => ([generateMatch({}, {})]))
    });

    rounds.reverse();

    for (let i = 0; i < rounds[0].length; i++) {
      const teamA = shuffeledTeams.shift();
      const teamB = shuffeledTeams.shift();
      rounds[0][i] = generateMatch(teamA, teamB);
    }

    commit('generate', {
      tournament,
      rounds
    });

    commit('setRound', {
      tournament,
      round: 0
    });
  },

  updateMatch({ dispatch }, match) {

    dispatch('updateMatchScore', match);
  },

  updateMatchScore({ commit, getters }, match) {
    const tournament = getters.tournament;
    const round = getters.round;
    const roundIndex = getters.activeRoundId;
    const matchIndex = round.findIndex(m => m.id === match.id);

    commit('updateMatchScore', { tournament, roundIndex, matchIndex, match });
  },

  completeRound({ commit, getters }) {
    const tournament = getters.tournament;
    const roundIndex = getters.activeRoundId;
    const totalRounds = getters.rounds.length;

    console.log(roundIndex, totalRounds);

    const done = roundIndex === (totalRounds - 1);

    commit('complete', {tournament, roundIndex, done});
  },
}
