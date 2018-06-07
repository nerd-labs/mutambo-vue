<template lang="pug">
  .page.home.u-background--gradient.u-height--full
    .page__content.page__content--center
      .icon 🏆
      h1 {{winner.team}}

      template(v-if="type === 'league'")
        .icon--small ⚽️
        h2 {{topscorer.team}}
        h2 {{topscorer.scored}} goals scored

      template(v-if="type === 'league'")
        .icon--small 🛡
        h2 {{topdefence.team}}
        h2 {{topdefence.against}} goals against
</template>

<script>
import { mapGetters } from 'vuex';
import { orderByProperty } from '../helpers/order-by-property';

export default {
  mounted() {
    this.table();
  },

  data: () => ({
    winner: {},
    topscorer: {},
    topdefence: {},
  }),

  computed: {
    ...mapGetters({
      name: 'currentTournament/name',
      type: 'currentTournament/type',
      leagueTable: 'league/table',
      knockoutWinner: 'knockout/winner',
    }),
  },

  methods: {
    table() {
      switch (this.type) {
        case 'league':
          const flattenedTable = this.flattenTable(this.leagueTable);

          const winnerTable = flattenedTable.sort(orderByProperty('points', 'difference', 'scored')).reverse();
          this.winner = winnerTable[0];

          const scoredTable = winnerTable.sort(orderByProperty('scored', 'difference')).reverse();
          this.topscorer = scoredTable[0];

          const defenceTable = scoredTable.sort(orderByProperty('against', 'difference'));
          this.topdefence = defenceTable[0];
          break;

        case 'knockout':
          this.winner = knockoutWinner;
          break;

        case 'groupstage':
          this.winner = knockoutWinner;

          // get all group tables and join them

          // get all knockout stats
          break;
      }
    },

    flattenTable(table) {
      return table.map(t => {
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
  }

};
</script>

<style scoped>
  .icon {
    font-size: 100px;
  }

  .icon--small {
    font-size: 50px;
    margin-top: 50px;
  }
</style>
