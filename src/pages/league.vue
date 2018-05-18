<template lang="pug">
  div
    v-container(grid-list-md)
      h2.display-2.accent--text.mb-5 {{ tournamentName }}

      mut-matches(:matches="matches" @update="matchUpdate" @done="allMatchesPlayed")

      v-btn(v-if="done" @click="endTournament") End tournament

</template>

<script>
import { matchStates, routes } from "../config";

export default {
  computed: {
    slug() {
      return this.$store.getters["currentTournament/slug"];
    },

    tournamentName() {
      return this.$store.getters["currentTournament/name"];
    },

    matches() {
      return this.$store.getters["currentTournament/leagueMatches"];
    },

    done() {
      return this.$store.getters["currentTournament/leagueCompleted"];
    }
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
