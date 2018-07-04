<template lang="pug">
  .page.teams
    mut-header

    .page__content
      h3 🙏🏻 Give us some teams plz 🙏🏻

      .create-teams
        mut-create-team(@addTeam="addTeam" :team="team" v-for="team in teams")

      .form__group.form__group--checkbox
        label(for="randomize") Randomly mix players and teams
        input(type="checkbox" id="randomize" v-model='randomly')

      a.button.button--tertiary(@click="submit" v-if="allTeamsEntered")
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
      teams: 'currentTournament/teams',
      type: 'currentTournament/type',
    }),

    allTeamsEntered() {
      // check if all teams have an id, a club and a player
      return this.teams.filter(team => team.id && team.club && team.player).length === this.teams.length;
    }
  },

  beforeMount() {
      // JUST FOR DEVELOPMENT
      // const migratedTeams = generateDefaultTeams(this.teams.length);
      //
      // this.teams.forEach((team, index) => {
      //   team = Object.assign(team, migratedTeams[index]);
      //   this.addTeam(team);
      // });
  },

  methods: {
    addTeam(team) {
      this.$store.dispatch("currentTournament/addTeam", team);
    },

    submit() {
      if (this.randomly) {
        this.$router.push(`/random/${this.slug}`);
      }
      else {
        if (this.type === 'groupstage') {
          this.$router.push(`/${this.type}/draw/${this.slug}`);
        } else {
          this.$router.push(`/${this.type}/${this.slug}`);
        }
      }
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
