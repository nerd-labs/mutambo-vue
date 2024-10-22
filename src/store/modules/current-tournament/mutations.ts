import { MutationTree } from 'vuex';

export const mutations: MutationTree<any> = {
  set(state, tournamentId) {
    state.id = tournamentId;
  },

  reset(state) {
    state.id = undefined;
  },

  updateDetails(state, { tournament, details }) {
    tournament.details = Object.assign({}, tournament.details, details);
  },

  addEmptyTeams(state, { tournament, teams }) {
    tournament.teams = teams;
  },

  randomizeTeams(state, { tournament, randomizedTeams }) {
    tournament.teams = randomizedTeams;
  },

  addTeam(state, { tournament, team }) {
    if (!tournament.teams) { tournament.teams = []; }
    const index = tournament.teams.findIndex((t: any) => t.id === team.id);

    if (index < 0) {
      tournament.teams.push(team);
    } else {
      tournament.teams[index] = team;
    }
  },

  setProgress(state, { tournament, page }) {
    tournament.page = page;
  },
};
