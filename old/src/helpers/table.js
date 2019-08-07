import { matchWinner } from '../config';

export function getTable(teams, matches) {
  const table = [];

  teams.forEach((team) => {
    table.push({
      id: team.id,
      club: team.club,
      player: team.player,
      stats: {
        won: 0,
        draw: 0,
        lost: 0,
        played: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0,
      }
    });
  });

  matches.forEach((match) => {
    const homeIndex = table.findIndex((team) => {
      return team.id === match.home.id;
    });

    const awayIndex = table.findIndex((team) => {
      return team.id === match.away.id;
    });

    table[homeIndex].stats.goalsFor += match.home.score;
    table[homeIndex].stats.goalsAgainst += match.away.score;

    table[awayIndex].stats.goalsFor += match.away.score;
    table[awayIndex].stats.goalsAgainst += match.home.score;

    table[homeIndex].stats.played += 1;
    table[awayIndex].stats.played += 1;

    table[homeIndex].stats.goalDifference = table[homeIndex].stats.goalsFor - table[homeIndex].stats.goalsAgainst;
    table[awayIndex].stats.goalDifference = table[awayIndex].stats.goalsFor - table[awayIndex].stats.goalsAgainst;

    switch (match.winner) {
      case matchWinner.HOME:
        table[homeIndex].stats.won += 1;
        table[homeIndex].stats.points += 3;

        table[awayIndex].stats.lost += 1;

        break;

      case matchWinner.AWAY:
        table[awayIndex].stats.won += 1;
        table[awayIndex].stats.points += 3;

        table[homeIndex].stats.lost += 1;

        break;

      case matchWinner.TIE:
        table[homeIndex].stats.draw += 1;
        table[homeIndex].stats.points += 1;

        table[awayIndex].stats.draw += 1;
        table[awayIndex].stats.points += 1;

        break;
    }
  });

  return table;
}
