import { pages } from '../config';
import { generateMatch } from '../helpers/match';

export default {
  addTournament(state, { slug, name, teams, type }) {
    state.tournaments.push({
      slug: slug,
      name,
      teams,
      type
    })
  },

  setProgress(state, { slug, page }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      tournament.page = page;
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }
  },

  addDetails(state, { slug, details }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      tournament.details = details;
    } else {
      throw new Error(`Tournament ${slug} not found`);
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

  addMatches(state, { matches, slug }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      tournament.matches = matches;
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

  updateMatchScore(state, { match, slug }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      const index = tournament.matches.findIndex(m => m.id === match.id);

      if (index > -1) {
        tournament.matches[index] = match;
      }
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }

  },

  generateKORounds(state, { teams, slug }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      const shuffeledTeams = teams.sort(function (a, b) { return 0.5 - Math.random() });

      tournament.knockout = {};
      tournament.knockout.rounds = [];

      const matches = [];
      for (let i = 0; i < shuffeledTeams.length; i = i + 2) {
        matches.push(generateMatch(shuffeledTeams[i], shuffeledTeams[i + 1]));
      }

      tournament.knockout.rounds.push(matches);
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }

  }
}

