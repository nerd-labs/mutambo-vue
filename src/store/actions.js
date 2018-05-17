import { pages } from '../config';

export default {
  updateMatch({ commit }, { match, slug }) {

    commit("updateLeagueMatchScore", {
      match: match,
      slug
    });

    commit("updateTeamStat", {
      teamId: match.home.id,
      score: match.home.score,
      scoreOpponent: match.away.score,
      slug
    });

    commit("updateTeamStat", {
      teamId: match.away.id,
      score: match.away.score,
      scoreOpponent: match.home.score,
      slug
    });
  },
}
