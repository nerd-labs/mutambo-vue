<template lang="pug">
  div
    v-form(v-model="valid" lazy-validation ref="form")
      v-badge(left :color='colorState.color' overlap)
        v-icon(slot='badge' dark small) {{colorState.icon}}
        v-card
          v-card-title(primary-title)
            v-container(fluid grid-list-md)
              v-layout(row wrap)
                div(hidden)
                  v-text-field(label="id" v-model='team.id')
                v-flex(d-flex xs12)
                  v-text-field(label='Player' :value='team.player' @input="changePlayer" required :rules="playerRules")
                v-flex(d-flex xs12)
                  v-text-field(label='Club' :value='team.club' @input="changeClub" required :rules="clubRules")


</template>

<script>
import { debounce } from "lodash";

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
  data: () => ({
    valid: true,
    playerRules: [v => !!v || "Player is required"],
    clubRules: [v => !!v || "Club is required"],
    state: ""
  }),
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
      if (!this.valid) {
        this.state = "error";
        return;
      }

      if (!this.team.club || !this.team.player) {
        return;
      }

      if (!this.team.id) {
        this.team.id = this.generateId();
      }

      this.$emit("addTeam", this.team);

      this.state = "success";
    }, 300),

    generateId() {
      return (
        this.s4() +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        "-" +
        this.s4() +
        this.s4() +
        this.s4()
      );
    },

    s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  },
  computed: {
    colorState() {
      let state;

      if (this.valid && this.team.id) {
        this.state = "success";
      }

      switch (this.state) {
        case "success":
          state = {
            color: "green",
            icon: "done"
          };
          break;
        case "error":
          state = {
            color: "red",
            icon: "notifications"
          };
          break;
        default:
          state = {
            color: "",
            icon: ""
          };
      }

      return state;
    }
  }
};
</script>
