<template lang="pug">
  div
    v-container(grid-list-md)
      h2.display-2.accent--text.mb-5 {{ name }}

      mut-matches(:matches="matches" @update="matchUpdate" @done="allMatchesPlayed")

      v-btn(v-if="done" @click="endTournament") End tournament

</template>

<script>
import { mapGetters } from "vuex";
import { matchStates, routes } from "../config";

export default {

  computed: {
    ...mapGetters({
      slug: 'currentTournament/slug',
      name: 'currentTournament/name',
      matches: 'league/matches',
      done: 'league/completed',
    })
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
