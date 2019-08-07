<template lang="pug">
  .page.results.u-background--gradient.u-height--full
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

      .button(@click="endTournament") End tournament
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { orderByProperty } from '@/store/helpers/order-by-property';

const currentTournament = namespace('currentTournament');
const knockout = namespace('knockout');
const league = namespace('league');

@Component
export default class Results extends Vue {
  @currentTournament.Getter('type') public type!: any;
  @league.Getter('table') public leagueTable!: any;
  @knockout.Getter('winner') public knockoutWinner!: any;

  public winner: any = {};
  public topscorer: any = {};
  public topdefence: any = {};

  public mounted() {
    this.table();
  }

  public endTournament() {
    this.$router.push('/');
  }

  public table() {
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
        this.winner = {
          team: `${this.knockoutWinner.club} (${this.knockoutWinner.player})`,
        };
        break;

      case 'groupstage':
        this.winner = {
          team: `${this.knockoutWinner.club} (${this.knockoutWinner.player})`,
        };
        // get all group tables and join them

        // get all knockout stats
        break;
    }
  }

  public flattenTable(table: any) {
    return table.map((t: any) => {
      return {
        team: `${t.club} (${t.player})`,
        played: t.stats.played,
        wins: t.stats.won,
        draws: t.stats.draw,
        losses: t.stats.lost,
        scored: t.stats.goalsFor,
        against: t.stats.goalsAgainst,
        difference: t.stats.goalDifference,
        points: t.stats.points,
      };
    });
  }
}
</script>

<style lang="scss" scoped>
.icon {
  font-size: 100px;
}

.icon--small {
  font-size: 50px;
  margin-top: 50px;
}
</style>
