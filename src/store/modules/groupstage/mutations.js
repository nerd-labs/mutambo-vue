export default {
  set(state, tournamentId) {
    state.id = tournamentId
  },

  reset(state) {
    state.id = undefined
  },

  setGroups(state, { tournament, groups }) {
    tournament.groupstage.groups = groups;
  },

  updateMatchScore(state, { tournament, matchIndex, groupIndex, match }) {
    if (matchIndex > -1) {
      tournament.groupstage.groups[groupIndex].matches[matchIndex] = match;
    }
  },

  finish(state, { tournament, proceedingTeams }) {
    tournament.groupstage.proceedingTeams = proceedingTeams;
    tournament.groupstage.done = true;
  }
}
