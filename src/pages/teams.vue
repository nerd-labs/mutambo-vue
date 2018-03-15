<template lang="pug">
    div
      v-container(grid-list-md)
        h2.display-2.accent--text.mb-5 {{ tournamentName }}


        v-layout(row wrap justify-center align-center)
          v-flex(d-flex xs12 sm6 md4 lg3 xl2 my-2 v-for="n in numberOfPlayers")
            mut-create-team(@addTeam="addTeam" :team="teams[n - 1]")

        .mt-5.text-xs-left
          v-checkbox(label='Randomly mix players and teams' v-model='randomly')
          v-btn(color="success" @click="submit") Submit
</template>

<script>
export default {
  data: () => ({
    randomly: false
  }),
  computed: {
    numberOfPlayers() {
      return this.$store.getters.numberOfPlayers(this.$route.params.slug);
    },

    tournamentName() {
      return this.$store.getters.tournamentName(this.$route.params.slug);
    },

    tournamentType() {
      return this.$store.getters.tournamentType(this.$route.params.slug);
    },

    tournamentSlug() {
      return this.$store.getters.tournamentSlug(this.$route.params.slug);
    },

    teams() {
      return this.$store.getters.teams(this.$route.params.slug) || [];
    }
  },
  methods: {
    addTeam(team) {
      this.$store.commit("addTeam", {
        team: team,
        tournament: this.tournamentSlug
      });
    },

    submit() {
      this.$router.push(`/${this.tournamentType}/${this.tournamentSlug}`);
    }
  }
};
</script>
