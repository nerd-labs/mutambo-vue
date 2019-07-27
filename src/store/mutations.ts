import { MutationTree } from 'vuex';
import { RootState } from './state';

export const mutations: MutationTree<RootState> = {
  addTournament(state, { id, slug, name, type }) {
    const index = state.tournaments.findIndex((t: any) => t.id === id);

    if (index < 0) {
      const t = {
        id,
        slug,
        name,
        teams: [],
        type,
        details: {},
        league: {
          matches: [],
          table: [],
          done: false,
        },
        knockout: {
          rounds: [],
          teams: [],
          done: false,
          winner: undefined,
          activeRound: {
            id: 0,
            state: 0,
          },
        },
        groupstage: {
          groups: {},
          proceedingTeams: [],
          done: false,
        },
      };

      state.tournaments.push(t);
    } else {
      const tournament = state.tournaments.find((t: any) => t.id === state.tournaments[index].id);

      tournament.slug = slug;
      tournament.name = name;
      tournament.type = type;

      state.tournaments[index] = tournament;
    }
  },

  setProgress(state, { slug, page }) {
    const tournament = state.tournaments.find((t: any) => t.slug === slug);

    if (tournament) {
      tournament.page = page;
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }
  },

  updateDetails(state, { id, details }) {
    const tournament = state.tournaments.find((t: any) => t.id === id);

    if (tournament) {
      tournament.details = Object.assign({}, tournament.details, details);
    } else {
      throw new Error(`Tournament ${id} not found`);
    }
  },

  addTeam(state, { team, tournament }) {
    const currentTournament = state.tournaments.find((t: any) => t.slug === tournament);

    if (currentTournament.name) {
      if (!currentTournament.teams) { currentTournament.teams = []; }

      const index = currentTournament.teams.findIndex((t: any) => t.id === team.id);

      if (index < 0) {
        currentTournament.teams.push(team);
      } else {
        currentTournament.teams[index] = team;
      }
    }
  },

  randomizeTeams(state, { slug, newTeams }) {
    const tournament = state.tournaments.find((t: any) => t.slug === slug);

    if (tournament) {
      tournament.teams = newTeams;
    } else {
      throw new Error(`No tournament ${slug} found.`);
    }
  },

  deleteTournament(state, tournament) {
    const index = state.tournaments.findIndex((t: any) => t.id === tournament.id);

    if (index > -1) {
      state.tournaments.splice(index, 1);
    } else {
      throw new Error(`No tournament ${tournament.id} found.`);
    }
  },
};
