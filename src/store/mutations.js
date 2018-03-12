export default {
  addTournament(state, { slug, name, numberOfPlayers, type }) {
    state.tournaments.push({
      slug: slug,
      name,
      numberOfPlayers,
      type
    })
  },

  addTeam(state, { team, tournament }) {
    const tournament = state.tournaments.find(t => t.slug === tournament);

    if (tournament.name) {
      if (!tournament.teams) tournament.teams = [];

      const index = tournament.teams.findIndex(t => t.id === team.id);

      if (index < 0) {
        tournament.teams.push(team)
      } else {
        tournament.teams[index] = team;
      }
    }
  },
}

