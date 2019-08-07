<template lang="pug">
  .page.groupstage
    mut-header
      .button.button--small.button--secondary(v-if="view === 'matches'" @click="toggleView('table')") switch to table view
      .button.button--small.button--secondary(v-if="view === 'table'" @click="toggleView('matches')") switch to matches view

    .page__content
      template(v-if="view === 'matches'")
        mut-matches(:matches="matches" @update="matchUpdate" @done="allMatchesPlayed")

      template(v-if="view === 'table'")
        mut-table(:data="results")

      a.button.button--tertiary(@click="endTournament" v-if="done") End tournament

</template>

<script lang ="ts">
import MutHeader from '@/components/header.vue';
import MutMatches from '@/components/matches.vue';

import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { getTable } from '@/store/helpers/berger';

const currentTournament = namespace('currentTournament');
const league = namespace('league');

@Component({
  components: {
    MutHeader,
    MutMatches,
  },
})
export default class League extends Vue {
  @currentTournament.Getter('slug') public slug!: any;
  @currentTournament.Getter('name') public name!: any;
  @currentTournament.Getter('teams') public teams!: any[];
  @currentTournament.Getter('numberOfPlays') public numberOfPlays!: any;
  @league.Getter('completed') public done!: any;
  @league.Getter('matches') public matches!: any[];
  @league.Getter('table') public table!: any;

  public view: string = 'matches';

  public beforeMount() {
    this.$store.dispatch('league/updateTable');

    if (!this.matches.length) {
      this.generateMatches();
    }
  }

  get results() {
    return this.table.map((t: any) => {
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

  public matchUpdate(event: any) {
    this.$store.dispatch('league/updateMatch', event.match);
  }

  public allMatchesPlayed() {
    this.$store.dispatch('league/complete');
  }

  public endTournament() {
    this.$router.push(`/results/${this.$route.params.slug}`);
  }

  public toggleView(state: any) {
    this.view = state;
  }

  public reverseFixtures(n: any) {
    return n % 2 === 0;
  }

  public generateMatches() {
    const matches: any[] = [];

    for (let i = 1; i <= this.numberOfPlays; i++) {
      const teams = JSON.parse(JSON.stringify(this.teams));

      const bergerTable = getTable(
        teams,
        this.reverseFixtures(i),
      );
      matches.push(...bergerTable);
    }

    matches.map((match: any) => {
      match.away.score = 0;
      match.home.score = 0;
    });

    this.$store.dispatch('league/addMatches', matches);
  }
}
</script>

<style lang="scss" scoped>
.matches {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
}
</style>
