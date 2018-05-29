import { pages } from '../config';

export default {
  addTournament(state, { id, slug, name, teams, type }) {
    const t = {
      id,
      slug,
      name,
      teams,
      type,
      details: {},
      league: {
        matches: [],
        table: [],
        done: false
      },
      knockout: {
        rounds: [],
        activeRound: 0,
      },
        groupstage: {},
      };

      state.tournaments.push(t);
  },

  setProgress(state, { slug, page }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      tournament.page = page;
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }
  },

  updateDetails (state, { id, details }) {
    const tournament = state.tournaments.find(t => t.id === id)

    if (tournament) {
      tournament.details = Object.assign({}, tournament.details, details)
    } else {
      throw new Error(`Tournament ${id} not found`)
    }
  },

  addTeam(state, { team, tournament }) {
    const tournament = state.tournaments.find(t => t.slug === tournament);

    if (tournament.name) {
      if (!tournament.teams) tournament.teams = [];

      const index = tournament.teams.findIndex(t => t.id === team.id);

      if (index < 0) {
        tournament.teams.push(team)
      } else {
        tournament.teams[index] = team;
      }
    }
  },

  randomizeTeams(state, { slug, newTeams }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      tournament.teams = newTeams;
    } else {
      throw new Error(`No tournament ${slug} found.`);
    }

  },
}

