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
    slug() {
      return this.$route.params.slug;
    },

    type() {
      return this.$route.params.type;
    },

    tournament() {
      return this.$store.getters.tournament(this.slug);
    },

    name() {
      return this.tournament.name();
    },

    teams() {
      return this.tournament.teams();
    }
  },

  methods: {
    addTeam(team) {
      this.$store.commit("addTeam", {
        team: team,
        tournament: this.slug
      });
    },

    submit() {
      if (this.randomly) this.$router.push(`/${this.type}/random/${this.slug}`);
      else this.$router.push(`/${this.type}/summary/${this.slug}`);
    }
  }
};
</script>
