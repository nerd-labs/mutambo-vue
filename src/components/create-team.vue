<template lang="pug">
  div
    v-form(v-model="valid" lazy-validation ref="form")
        v-card
          v-card-title(primary-title)
            v-container(fluid grid-list-md)
              v-layout(row wrap)
                div(hidden)
                  v-text-field(label="id" v-model='team.id')
                v-flex(d-flex xs12)
                  v-text-field(label='Player' :value='team.player' @input="changePlayer")
                v-flex(d-flex xs12)
                  v-text-field(label='Club' :value='team.club' @input="changeClub")


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
