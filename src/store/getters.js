export default {
  tournaments: state => () => {
    return state.tournaments;
  },

  tournament: state => slug => {
    const tournament = state.tournaments.find(tournament => tournament.slug === slug);

    if (!tournament) {
      throw new Error(`Tournament with name ${slug} not find`);
    }

    return {
      name: () => {
        return tournament.name;
      },

      type: () => {
        return tournament.type;
      },

      slug: () => {
        return tournament.slug;
      },

      teams: () => {
        return tournament.teams;
      },

      matchList: () => {
        return tournament.matches
      },

      page: () => {
        return tournament.page
      },

      numberOfPlays: () => {
        return tournament.details.numberOfPlays;
      },
    }
  }
}
