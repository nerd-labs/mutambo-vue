<template lang="pug">
  .page.teams
    mut-header(:subtitle="name")

    .page__content
      h3 🙏🏻 Give us some teams plz 🙏🏻

      .create-teams
        mut-create-team(@addTeam="addTeam" :team="team" v-for="team in teams")

      .form__group
        label(for="randomize") Randomly mix players and teams
        input(type="checkbox" id="randomize" v-model='randomly')

      a.button.button--tertiary(@click="submit")
        | continue
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

<style scoped>
  .create-teams {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
  }
</style>
