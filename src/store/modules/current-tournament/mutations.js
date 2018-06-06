export default {
  set (state, tournamentId) {
    state.id = tournamentId
  },

  reset (state) {
    state.id = undefined
  },

  updateDetails (state, { tournament, details }) {
    tournament.details = Object.assign({}, tournament.details, details)
  },

  randomizeTeams (state, { tournament, randomizedTeams }) {
    tournament.teams = randomizedTeams
  },

  addTeam (state, { tournament, team }) {
    if (!tournament.teams) tournament.teams = []
    const index = tournament.teams.findIndex(t => t.id === team.id)

    if (index < 0) {
      tournament.teams.push(team)
    } else {
      tournament.teams[index] = team
    }
  },

  setProgress(state, { tournament, page }) {
    tournament.page = page;
  },
}
