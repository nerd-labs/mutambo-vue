import { matchStates } from '../config';
import IdGenerator from '../services/id-generator';

export function generateMatch(teamA, teamB) {
  return {
    home: teamA,
    away: teamB
  }
}
