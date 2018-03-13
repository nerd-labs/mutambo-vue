export default {
  numberOfPlayers: state => slug => {
    return parseInt(state.tournaments.find(tournament => tournament.slug === slug).numberOfPlayers);
  },

  tournamentName: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug).name;
  },

  tournamentSlug: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug).slug;
  },

  teams: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug).teams;
  },
}
