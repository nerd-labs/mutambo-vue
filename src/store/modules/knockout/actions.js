import { generateMatch } from '../../../helpers/match';
import { calculateTotalRounds } from '../../../helpers/knockout';
import { matchWinner } from '../../../config'

export default {
  generate({ commit, getters }, data) {
    const tournament = getters.tournament;
    let teams = tournament.teams;

    if (data && data.teams) teams = data.teams;

    const shuffeledTeams = JSON.parse(JSON.stringify(teams.sort((a, b) => 0.5 - Math.random())));
    const totalRounds = calculateTotalRounds(teams.length);

    const rounds = Array.from({ length: totalRounds }).map((round, i) => {
      const matches = teams.length / Math.pow(2, totalRounds - (i + 1));

      // create empty matches
      return Array.from({ length: matches / 2 }).map(i => ([generateMatch({}, {})]))
    });

    rounds.reverse();

    for (let i = 0; i < rounds[0].length; i++) {
      const teamA = shuffeledTeams.shift();
      const teamB = shuffeledTeams.shift();
      rounds[0][i] = generateMatch(teamA, teamB);
    }

    commit('generate', {
      tournament,
      teams,
      rounds
    });

    commit('setRound', {
      tournament,
      round: 0
    });
  },

  updateMatch({ dispatch }, match) {
    dispatch('updateMatchScore', match);
  },

  updateMatchScore({ commit, getters }, match) {
    const tournament = getters.tournament;
    const round = getters.round;
    const roundIndex = getters.activeRoundId;
    const matchIndex = round.findIndex(m => m.id === match.id);

    commit('updateMatchScore', { tournament, roundIndex, matchIndex, match });
  },

  completeRound({ commit, dispatch, getters }) {
    const tournament = getters.tournament;
    const roundIndex = getters.activeRoundId;
    const totalRounds = getters.rounds.length;

    const done = roundIndex === (totalRounds - 1);

    if (done) {
      commit('complete', {tournament, roundIndex, done});
      dispatch('setWinner');
    } else {
      dispatch('generateRound');
    }
  },

  generateRound({ commit, getters }) {
    const tournament = getters.tournament;
    const teams = getters.teams;
    const roundIndex = getters.activeRoundId;
    const rounds = getters.rounds;

    const winningTeams = [];
    tournament.knockout.rounds[roundIndex].forEach(match => {
      switch(match.winner) {
        case matchWinner.HOME:
          winningTeams.push(match.home.id);
          break;
        case matchWinner.AWAY:
          winningTeams.push(match.away.id);
          break;
      }
    });

    const teams = tournament.teams.filter(team => {
      return winningTeams.includes(team.id);
    });

    const copyOfTeams = JSON.parse(JSON.stringify(teams));

    // new round
    roundIndex++;

    for (let i = 0; i < rounds[roundIndex].length; i++) {
      const teamA = copyOfTeams.shift();
      const teamB = copyOfTeams.shift();
      rounds[roundIndex][i] = generateMatch(teamA, teamB);
    }

    commit('generate', {
      tournament,
      rounds
    });

    commit('setRound', {
      tournament,
      round: roundIndex
    });
  }

  startRound({commit, getters}) {
    commit('startRound', {
      tournament: getters.tournament
    });
  });

  setWinner({commit, getters}) {
    const tournament = getters.tournament;
    const rounds = tournament.knockout.rounds;
    const final = rounds[rounds.length - 1][0];
    const winner = final.winner;
    const winningTeamId = winner === 1 ? final.home.id : final.away.id;
    commit('setWinner', { tournament, winningTeamId })
  }
}
