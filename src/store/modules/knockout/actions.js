import { generateMatch } from '../../../helpers/match';

export default {
  generate({commit, getters}, teams) {
    const tournament = getters.tournament;

    if (tournament) {
      const shuffeledTeams = teams.sort(function (a, b) { return 0.5 - Math.random() });

      const matches = [];
      for (let i = 0; i < shuffeledTeams.length; i = i + 2) {
        // TODO: splice??
        matches.push(generateMatch(shuffeledTeams[i], shuffeledTeams[i + 1]));
      }

      commit('generate', {
        tournament,
        matches
      });
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }

  }

}
