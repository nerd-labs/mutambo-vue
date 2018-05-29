import IdGenerator from '../services/id-generator';
import * as faker from 'faker';

export function generateDefaultTeams() {
  const teams = [];

  for (let i = 0; i < 32; i++) {
      teams.push({
        id: IdGenerator.id(),
        player: faker.name.findName(),
        club: faker.address.country(),
      })
  }

  return teams;
}
