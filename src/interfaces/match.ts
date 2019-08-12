import { MutTeam } from './teams';

export interface MutMatch {
  id: string;
  winner: number;
  state: string;
  home: MutTeam;
  away: MutTeam;
}
