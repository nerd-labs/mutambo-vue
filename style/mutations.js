export const STORAGE_KEY = 'mut-tournament';

export const state = {
  tournaments: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
};

export const mutations = {
  addTournament (state, { name, numberOfPlayers, type }) {
    state.tournaments.push({
      name,
      numberOfPlayers,
      type
    })
  },
}
