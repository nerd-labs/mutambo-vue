<template lang="pug">
  div
    v-container(grid-list-md)
      h2.display-2.accent--text.mb-5 {{ tournamentName }}

      mut-matches(:matches="matches" @update="matchUpdate" @done="allMatchesPlayed")

      v-btn(v-if="done || internalDone" @click="endTournament") End tournament

</template>

<script>
import { matchStates, routes } from "../config";

export default {
  data: () => ({
    internalDone: false
  }),

  computed: {
    slug() {
      return this.$route.params.slug;
    },

    tournament() {
      return this.$store.getters.tournament(this.slug);
    },

    tournamentName() {
      return this.tournament.name();
    },

    matches() {
      return this.tournament.leagueMatchList();
    },

    done() {
      return this.tournament.leagueCompleted();
    }
  },

  methods: {
    matchUpdate(event) {
      this.$store.dispatch("updateMatch", {
        match: event.match,
        slug: this.slug
      });
    },

    allMatchesPlayed() {
      this.$store.commit('completeLeague', {
        slug: this.slug
      });
    },

    endTournament() {
      this.internalDone = true;
      this.$router.push(`/results/${this.$route.params.slug}`);
    }
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
