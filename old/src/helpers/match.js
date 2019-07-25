import { matchStates } from '../config';
import IdGenerator from '../services/id-generator';

export function generateMatch(teamA, teamB) {
  const match = {
    home: teamA,
    away: teamB
    id: IdGenerator.id(),
    state: matchStates.NONE,
  }

  match.away.score = 0;
  match.home.score = 0;

  return match;
}
