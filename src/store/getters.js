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

      leagueMatchList: () => {
        if (tournament.league) return tournament.league.matches
      },

      page: () => {
        return tournament.page
      },

      numberOfPlays: () => {
        return tournament.details.numberOfPlays;
      },

      leagueCompleted: () => {
        if (tournament.league) return tournament.league.done
      },

    }
  },
}
