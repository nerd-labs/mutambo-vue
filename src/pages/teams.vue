<template lang="pug">
    div
      v-container(grid-list-md)
        h2.display-2.accent--text.mb-5 {{ tournamentName }}
        v-layout(row wrap justify-center align-center)
          v-flex(d-flex xs12 sm6 md4 lg3 xl2 my-2 v-for="team in teams")
            mut-create-team(@addTeam="addTeam" :team="team")

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
    tournamentName() {
      return this.$store.getters.tournamentName(this.$route.params.slug);
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
      if (this.randomly) this.$router.push(`/random/${this.tournamentSlug}`);
      else this.$router.push(`/summary/${this.tournamentSlug}`);
    }
  }
};
</script>
