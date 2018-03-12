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
      tournament.teams.push(team)
    }
  },
}

