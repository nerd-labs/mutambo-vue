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

<script>
import { mapGetters } from "vuex";
import { matchStates, routes } from "../config";

export default {
  beforeMount () {
    this.$store.dispatch('league/updateTable');
  },

  data: () => ({
    view: "matches"
  }),

  computed: {
    ...mapGetters({
      slug: 'currentTournament/slug',
      name: 'currentTournament/name',
      matches: 'league/matches',
      done: 'league/completed',
      table: 'league/table',
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

  methods: {
    matchUpdate(event) {
      this.$store.dispatch("league/updateMatch", event.match);
    },

    allMatchesPlayed() {
      this.$store.dispatch('league/complete');
    },

    endTournament() {
      this.$router.push(`/results/${this.$route.params.slug}`);
    },

    toggleView(state) {
      this.view = state;
    },
  }

};
</script>

<style lang="scss" scoped>
.matches {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
}
</style>
