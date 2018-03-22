import { pages } from '../config';

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

  }
}

