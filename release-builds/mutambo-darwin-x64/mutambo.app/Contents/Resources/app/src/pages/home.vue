<template lang="pug">
  div
    v-btn(color="primary" @click="goToCreate()") Create tournament

    br
    br

    v-list(v-if="tournaments.length")
      v-container(grid-list-md fluid)
        v-layout(row wrap justify-space-between)
          template(v-for="(tournament, index) in tournaments")
            v-flex(xs12 v-if="index !== 0")
              .pl-3.pr-3
                v-divider
            v-flex(xs12 sm7)
              v-subheader(@click="goToRoute(tournament.id)")
                | {{ tournament.name }}
            v-flex.text-xs-left.text-sm-right(xs12 sm5)
              v-chip(color='secondary' text-color='white' disabled) {{tournament.type}}
              v-chip(color='accent' text-color='white' disabled) {{tournament.teams.length}}

</template>

<script>

import { routes } from "../config";
import { mapGetters } from "vuex";

export default {
  beforeMount() {
    this.$store.dispatch("currentTournament/reset");
  },

  methods: {
    goToCreate() {
      this.$router.push(routes.CREATE.path);
    },

    goToRoute(id) {
      const tournament = this.$store.getters.tournamentById(id);
      this.$router.push(tournament.page);
    }
  },

  computed: {
    ...mapGetters({
      tournaments: "tournaments"
    })
  }
};
</script>
