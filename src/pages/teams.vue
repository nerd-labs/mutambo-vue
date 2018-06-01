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

import { mapGetters } from 'vuex';
import { generateDefaultTeams } from '../helpers/migrations';

export default {
  data: () => ({
    randomly: false
  }),
  computed: {

    ...mapGetters({
      slug: 'currentTournament/slug',
      name: 'currentTournament/name',
      teams: 'currentTournament/teams',
    })

  },

  beforeMount() {
      // JUST FOR DEVELOPMENT
      const migratedTeams = generateDefaultTeams(this.teams.length);

      this.teams.forEach((team, index) => {
        team = Object.assign(team, migratedTeams[index]);
        this.addTeam(team);
      });
  },

  methods: {
    addTeam(team) {
      this.$store.dispatch("currentTournament/addTeam", team);
    },

    submit() {
      if (this.randomly) this.$router.push(`/random/${this.slug}`);
      else this.$router.push(`/summary/${this.slug}`);
    }
  }
};
</script>
