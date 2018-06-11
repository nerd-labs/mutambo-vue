<template lang="pug">
  .u-box.create-team
    .form__group
      label Player
      input(type='text' v-model='team.player' @input="submit")
    .form__group
      label Club
      input(type='text' v-model="team.club" @input="submit")
    div(hidden)
      span(v-model='team.id')
</template>

<script>
import { debounce } from "lodash";

import IdGenerator from '../services/id-generator';

export default {
  props: {
    team: {
      type: Object | String,
      default: () => ({
        id: "",
        player: "",
        club: ""
      })
    }
  },
  methods: {
    submit: debounce(function() {
      if (!this.team.club || !this.team.player) {
        return;
      }

      if (!this.team.id) {
        this.team.id = IdGenerator.id();
      }

      this.$emit("addTeam", this.team);
    }, 500),

  }
};
</script>

<style scoped>
  .create-team {
    margin: 10px;
  }

  .create-team .form__group {
    margin-top: 30px;
  }

  .create-team .form__group:first-child {
    margin-top: 0;
  }
</style>
