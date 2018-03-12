<template lang="pug">
  div
    v-badge(left :color='colorState.color' overlap)
      v-icon(slot='badge' dark small) {{colorState.icon}}
      v-card
        v-card-title(primary-title)
          v-container(fluid grid-list-md)
            v-layout(row wrap)
              v-flex(d-flex xs12)
                v-text-field(label='Player' v-model='team.player')
              v-flex(d-flex xs12)
                v-text-field(label='Club' v-model='team.club')


</template>

<script>
import { debounce } from "lodash";

export default {
  props: {
    team: {
      type: Object | String,
      default: () => ({
        player: "",
        club: ""
      })
    }
  },
  data: () => ({
    state: ""
  }),
  watch: {
    team: {
      handler(value) {
        if (value.club && value.player) {
          this.submit(value);
        }
      },
      deep: true
    }
  },
  methods: {
    submit: debounce(function(value) {
      this.$emit("addTeam", {
        player: value.player,
        club: value.club
      });
      this.state =
        Math.floor(Math.random() * 2 + 1) === 1 ? "success" : "error";
    }, 300)
  },
  computed: {
    colorState() {
      let state;

      console.log(this.team);
      // if (this.team && this.team.club && this.team.player) {
      //   return {
      //     color: "green",
      //     icon: "done"
      //   };
      // }

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
