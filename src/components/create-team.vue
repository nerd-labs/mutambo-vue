<template lang="pug">
  .u-box.create-team
    .form__group
      label Player
      input(type='text' :value='team.player' @input="changePlayer")
    .form__group
      label Club
      input(type='text'  :value='team.club' @input="changeClub")
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
    changePlayer(player) {
      this.team.player = player;
      this.submit();
    },
    changeClub(club) {
      this.team.club = club;
      this.submit();
    },
    submit: debounce(function() {
      if (!this.team.club || !this.team.player) {
        return;
      }

      if (!this.team.id) {
        this.team.id = IdGenerator.id();
      }

      this.$emit("addTeam", this.team);
    }, 300),

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
