<template lang="pug">
    div
      v-container(grid-list-md)
        h2.display-2.accent--text.mb-5 {{ name }} results

        v-flex(xs12 xl8 offset-xl2)
          mut-table(:data="results")

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      name: 'currentTournament/name',
      table: 'league/table'
    }),

    results() {
      return this.table.map(t => {
        return {
          team: `${t.club} (${t.player})`,
          played: t.stats.played,
          wins: t.stats.won,
          draws: t.stats.draw,
          losses: t.stats.lost,
          scored: t.stats.goalsFor,
          against: t.stats.goalsAgainst,
          difference: t.stats.goalDifference,
          points: t.stats.points
        };
      });
    },
  },
};
</script>
