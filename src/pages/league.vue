<template lang="pug">
    div
      v-container(grid-list-md)
        h2.display-2.accent--text.mb-5 {{ tournamentName }}

      .matches
        mut-match(v-for="match in matches" :match="match" @update="matchUpdate")

</template>

<script>
import { matchStates } from "../config";

export default {
  data: () => ({
    activeTeams: []
  }),

  computed: {
    tournamentName() {
      return this.$store.getters.tournamentName(this.$route.params.slug);
    },

    matches() {
      return this.$store.getters.matchList(this.$route.params.slug);
    },

    isTeamPlaying() {
      return team => this.activeTeams.indexOf(team) > -1;
    }
  },

  methods: {
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

      if (event.state === matchStates.DONE) {
        this.$store.commit("updateMatchScore", {
          match: this.matches[index],
          slug: this.$route.params.slug
        });
      }
    }
  }
};
</script>

<style lang="scss">
.matches {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
}
</style>
