<template lang="pug">
  .page.teams
    mut-header

    .page__content
      h3 🙏🏻 Give us some teams plz 🙏🏻

      .create-teams
        mut-create-team(@addTeam="addTeam" :team="team" v-for="team in teams")

      .form__group.form__group--checkbox
        .randomize-checkbox(:class="{ 'randomize-checkbox--checked': randomly }")
          i.material-icons(v-if="randomly") check_box
          i.material-icons(v-if="!randomly") check_box_outline_blank
          input(type="checkbox" id="randomize" v-model='randomly')
        label(for="randomize") randomize teams

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
      teams: 'currentTournament/teams',
    })
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

  .randomize-checkbox {
    position: relative;
    line-height: 1px;
    margin-right: 10px;
  }

  .randomize-checkbox--checked {
    color: var(--light-sea-green);
  }

  #randomize {
    bottom: 0;
    cursor: pointer;
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
</style>
