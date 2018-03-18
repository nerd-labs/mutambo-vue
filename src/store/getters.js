export default {
  numberOfPlayers: state => slug => {
    return parseInt(state.tournaments.find(tournament => tournament.slug === slug).numberOfPlayers);
  },

  tournamentName: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug).name;
  },

  tournamentType: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug).type;
  },

  tournamentSlug: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug).slug;
  },

  teams: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug).teams;
  },

  matchList: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug).matches;
  },

  tournament: state => slug => {
    return state.tournaments.find(tournament => tournament.slug === slug) || {};
  }
}
