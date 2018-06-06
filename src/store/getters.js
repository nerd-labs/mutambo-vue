export default {
  tournaments: state => {
    return state.tournaments
  },

  tournamentById: state => id => {
    const tournament = state.tournaments.find(tournament => tournament.id === id)

    // if (!tournament) throw new Error('Tournament not found');

    return tournament || {}
  },

  tournamentBySlug: state => slug => {
    const tournament = state.tournaments.find(tournament => tournament.slug === slug)
    return tournament || {}
  }
}
