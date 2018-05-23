import { generateMatch } from '../../../helpers/match';
import { calculateTotalRounds } from '../../../helpers/knockout';

export default {
  generate({ commit, getters }) {
    const tournament = getters.tournament;
    const teams = tournament.teams;

    const shuffeledTeams = JSON.parse(JSON.stringify(teams.sort((a, b) => 0.5 - Math.random())));
    const totalRounds = calculateTotalRounds(teams.length);

    const rounds = Array.from({ length: totalRounds }).map((round, i) => {
      const matches = teams.length / 2; // TODO: calculation error???
      const totalMatchesPerRound = Math.floor((matches / (i + 1)));
      // create empty matches
      return Array.from({ length: totalMatchesPerRound }).map(i => ([generateMatch({}, {})]))
    });

    for (let i = 0; i < rounds[0].length; i++) {
      const teamA = shuffeledTeams.shift();
      const teamB = shuffeledTeams.shift();
      rounds[0][i] = generateMatch(teamA, teamB);
    }

    commit('generate', {
      tournament,
      rounds
    });
  }

}
