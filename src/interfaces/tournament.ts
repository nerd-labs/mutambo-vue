import { MutTeam } from './teams';

export interface MutTournament {
  id: string;
  name: string;
  type: string;
  slug: string;
  teams: MutTeam[];
  details: {
    numberOfProceedingPlayers: number;
    numberOfPlays: number;
  };
  knockout: {
    done: boolean;
  };
}
