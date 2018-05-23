export default {
  generateKORounds({commit}, { teams, slug }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      const shuffeledTeams = teams.sort(function (a, b) { return 0.5 - Math.random() });

      const matches = [];
      for (let i = 0; i < shuffeledTeams.length; i = i + 2) {
        matches.push(generateMatch(shuffeledTeams[i], shuffeledTeams[i + 1]));
      }

      tournament.knockout.rounds.push(matches);
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }

  }

}
