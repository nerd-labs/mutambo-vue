import { IdGenerator } from './id-generator';
import { matchStates } from '@/store/config';

export function generateMatch(teamA: any, teamB: any) {
  const match = {
    home: teamA,
    away: teamB,
    id: IdGenerator.id(),
    state: matchStates.NONE,
  };

  match.away.score = 0;
  match.home.score = 0;

  return match;
}
