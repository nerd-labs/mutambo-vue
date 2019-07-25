export default {
  set(state, tournamentId) {
    state.id = tournamentId
  },

  reset(state) {
    state.id = undefined
  },

  complete(state, tournament) {
    tournament.league.done = true;
  },

  updateMatchScore(state, { tournament, matchIndex, match }) {
    if (matchIndex > -1) {
      tournament.league.matches[matchIndex] = match;
    }
  },

  addMatches(state, { tournament, matches }) {
    tournament.league.matches = matches;
  },

  updateTable(state, { tournament, table }) {
    tournament.league.table = table;
  }
}
