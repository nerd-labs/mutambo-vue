import { GetterTree } from 'vuex';
import { RootState } from './state';

export const getters: GetterTree<RootState, RootState> = {
  tournaments(state) {
    return state.tournaments;
  },

  tournamentById: (state) => (id: any) => {
    const tournament: any = state.tournaments.find((t: any) => t.id === id);
    return tournament || {};
  },

  tournamentBySlug: (state) => (slug: any) => {
    const tournament: any = state.tournaments.find((t: any) => t.slug === slug);
    return tournament || {};
  },
};
