<template lang="pug">
  div
    v-container(grid-list-md)
      h2.display-2.accent--text.mb-5 {{ name }}

      v-flex.mb-5(xs6 offset-xs3)
       v-btn-toggle(v-model="view")
        v-btn(color="primary white--text" flat value="matches") Matches
        v-btn(color="primary white--text" flat value="table") Table

      v-flex.mb-5(xs12 xl8 offset-xl2 v-if="view === 'matches'")
        mut-matches(:matches="matches" @update="matchUpdate" @done="allMatchesPlayed")

      v-flex.mb-5(xs12 xl8 offset-xl2 v-if="view === 'table'")
        mut-table(:data="results")

      v-btn(v-if="done" @click="endTournament") End tournament

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
  }

};
</script>

<style lang="scss">
.matches {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
}
</style>
