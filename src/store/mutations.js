import { pages } from '../config';

export default {
  addTournament(state, { id, slug, name, teams, type }) {
    const t = {
      id,
      slug,
      name,
      teams,
      type
    };

    t[type] = {};

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

  updateDetails (state, payload) {
    const tournament = state.tournaments.find(t => t.id === payload.id)

    if (tournament) {
      tournament.details = Object.assign({}, tournament.details, payload.details)
    } else {
      throw new Error(`Tournament ${payload.id} not found`)
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

  addLeagueMatches(state, { matches, slug }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      tournament.league.matches = matches;
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

  updateLeagueMatchScore(state, { match, slug }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      const index = tournament.league.matches.findIndex(m => m.id === match.id);

      if (index > -1) {
        tournament.league.matches[index] = match;
      }
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }
  },

  completeLeague(state, { slug }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      tournament.league.done = true;
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }
  },

  updateTeamStat(state, { teamId, score, scoreOpponent, slug }) {
    const tournament = state.tournaments.find(t => t.slug === slug);

    if (tournament) {
      const team = tournament.teams.find(t => t.id === teamId);

      if (team) {

        if (!team.stats) {
          team.stats = {
            played: 0,
            wins: 0,
            draws: 0,
            loses: 0,
            scored: 0,
            against: 0,
            points: 0,
          }
        }

        team.stats.played++;
        team.stats.scored += score;
        team.stats.against += scoreOpponent;

        if (score > scoreOpponent) {
          team.stats.wins++;
          team.stats.points += 3;
        } else if (score === scoreOpponent) {
          team.stats.draws++;
          team.stats.points += 1;
        } else if (score < scoreOpponent) {
          team.stats.loses++;
        }
      }
    } else {
      throw new Error(`Tournament ${slug} not found`);
    }
  }
}

