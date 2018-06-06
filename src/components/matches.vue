<template lang="pug">
  .matches
    mut-match(v-for="match in matches" :match="match" @update="matchUpdate" :noTieAllowed="noTieAllowed")
</template>

<script>
import { matchStates } from "../config";

export default {
  props: {
    matches: {
      required: true
    },
    noTieAllowed: {
      required: false,
    }
  },

  data: () => ({
    activeTeams: [],
    totalMatchesLeft: 0
  }),

  beforeMount() {
    if(this.allMatchedsPlayed()) {
      this.$emit("done");
    }
  },

  computed: {
    isTeamPlaying() {
      return team => this.activeTeams.indexOf(team) > -1;
    }
  },

  methods: {
    allMatchedsPlayed() {
      const hasRemainingMatches = this.matches.every((match) => {
        return match.state === matchStates.DONE;
      });

      return hasRemainingMatches;
    },

    matchUpdate(event) {
      const index = this.matches.findIndex(m => {
        return m.id === event.match.id;
      });

      if (index === -1) throw new Error("match not found");

      this.matches[index].state = event.state;
      this.matches[index].winner = event.winner;

      this.activeTeams = [];

      const activeMatches = this.matches.filter(
        m => m.state === matchStates.PLAYING
      );

      activeMatches.forEach(m => {
        this.activeTeams.push(m.home.club);
        this.activeTeams.push(m.away.club);
      });

      this.matches.forEach((m, i) => {
        if (m.state === matchStates.DONE) return;

        if (
          (this.isTeamPlaying(m.home.club) ||
            this.isTeamPlaying(m.away.club)) &&
          m.state !== matchStates.PLAYING
        ) {
          this.matches[i].state = matchStates.DISABLED;
        } else if (m.state === matchStates.DISABLED) {
          this.matches[i].state = matchStates.NONE;
        }
      });

      this.$emit("update", {
        match: this.matches[index]
      });

      if(this.allMatchedsPlayed()) {
        this.$emit("done");
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.matches {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
</style>
