import { GetterTree } from 'vuex';

export const getters: GetterTree<any, any> = {
  tournaments: (state) => {
    return state.tournaments;
  },

  tournamentById: (state) => (id: any) => {
    const tournament = state.tournaments.find((t: any) => tournament.id === id);

    // if (!tournament) throw new Error('Tournament not found');

    return tournament || {};
  },

  tournamentBySlug: (state) => (slug: any) => {
    const tournament = state.tournaments.find((t: any) => tournament.slug === slug);
    return tournament || {};
  },
};
