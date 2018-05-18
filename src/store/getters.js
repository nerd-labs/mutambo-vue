export default {
  tournaments: state => {
    return state.tournaments
  },

  tournamentById: state => id => {
    const tournament = state.tournaments.find(tournament => tournament.id === id)
    return tournament || {}
  },

  tournamentBySlug: state => slug => {
    const tournament = state.tournaments.find(tournament => tournament.slug === slug)
    return tournament || {}
  },

  tournament: state => slug => {
    const tournament = state.tournaments.find(tournament => tournament.slug === slug)

    if (!tournament) {
      throw new Error(`Tournament with name ${slug} not find`)
    }

    return {
      name: () => {
        return tournament.name
      },

      type: () => {
        return tournament.type
      },

      slug: () => {
        return tournament.slug
      },

      teams: () => {
        return tournament.teams
      },

      matchList: () => {
        return tournament.matches
      },

      page: () => {
        return tournament.page
      },

      numberOfPlays: () => {
        return tournament.details.numberOfPlays;
      },

      knockoutRounds: () => {
        return tournament.knockout.round;
      },

      koRounds: () => {
        const rounds = [];

        let totalTeams = tournament.teams.length;
        let totalRounds = 0;

        for (let i = totalTeams; i >= 2; i = i / 2) {
          rounds.push({
            matches: []
          });

          const matches = [];
          const totalMatches = i / 2;
          for (let y = 0; y < totalMatches; y++) {
            const round = tournament.knockout.rounds[totalRounds] || [];
            matches.push(round[y] || {});
          }

          rounds[totalRounds].matches = matches;
          totalRounds++;
        }

        return rounds;
      },
    }
  }
}
