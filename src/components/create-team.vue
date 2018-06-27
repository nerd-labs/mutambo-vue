<template lang="pug">
  .u-box.create-team
    .form__group
      label Player
      input(type='text' v-model='internalTeam.player' @input="submit")
    .form__group
      label Club
      input(type='text' v-model="internalTeam.club" @input="submit")
    div(hidden)
      span(v-model='internalTeam.id')
</template>

<script>
import { debounce } from "lodash";

import IdGenerator from '../services/id-generator';

export default {
  props: {
    team: {
      type: Object | String
    }
  },

  computed: {
    internalTeam() {
      const defaultTeam = {
        id: "",
        player: "",
        club: ""
      };

      return this.team || defaultTeam;
    }
  },

  methods: {
    submit() {
      if (!this.internalTeam.club || !this.internalTeam.player) {
        return;
      }

      if (!this.internalTeam.id) {
        this.internalTeam.id = IdGenerator.id();
      }

      this.emit();
    },

    emit: debounce(function() {
      this.$emit("addTeam", this.internalTeam);
    }, 400)
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
