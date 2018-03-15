<template lang="pug">
    div
      v-container(grid-list-md)
        h2.display-2.accent--text.mb-5 {{ tournamentName }}

      .matches
        mut-match(v-for="match in matches" :match="match" @update="matchUpdate")

</template>

<script>
import { matchStates } from '../config';

export default {
  data: () => ({
    randomly: false,
    activeTeams: [],
    matches: [{
      home: {
        team: 'Juventus',
        player: 'Wart',
        score: 0,
        winner: undefined
      },
      away: {
        team: 'AS Roma',
        player: 'Robbert',
        score: 0,
        winner: undefined
      },
      state: matchStates.NONE
    }, {
      home: {
        team: 'Chelsea',
        player: 'Lander',
        score: 0,
        winner: undefined
      },
      away: {
        team: 'Man. Utd.',
        player: 'Stijn',
        score: 0,
        winner: undefined
      },
      state: matchStates.NONE
    }, {
      home: {
        team: 'Man. City',
        player: 'Tom',
        score: 0,
        winner: undefined
      },
      away: {
        team: 'PSG',
        player: 'Frederik',
        score: 0,
        winner: undefined
      },
      state: matchStates.NONE
    },{
      home: {
        team: 'Juventus',
        player: 'Wart',
        score: 0,
        winner: undefined
      },
      away: {
        team: 'Chelsea',
        player: 'Lander',
        score: 0,
        winner: undefined
      },
      state: matchStates.NONE
    },{
      home: {
        team: 'AS Roma',
        player: 'Robbert',
        score: 0,
        winner: undefined
      },
      away: {
        team: 'PSG',
        player: 'Frederik',
        score: 0,
        winner: undefined
      },
      state: matchStates.NONE
    },{
      home: {
        team: 'Man. Utd.',
        player: 'Stijn',
        score: 0,
        winner: undefined
      },
      away: {
        team: 'Man. City',
        player: 'Tom',
        score: 0,
        winner: undefined
      },
      state: matchStates.NONE
    }]
  }),
  computed: {
    tournamentName() {
      return this.$store.getters.tournamentName(this.$route.params.slug);
    },
  },
  methods: {
    isTeamPlaying(team) {
      return this.activeTeams.indexOf(team) > -1;
    },

    matchUpdate() {
      this.activeTeams = [];

      const activeMatches = this.matches.filter((m) => m.state === matchStates.PLAYING);

      activeMatches.forEach((m) => {
        this.activeTeams.push(m.home.team);
        this.activeTeams.push(m.away.team);
      });

      this.matches.forEach((m, i) => {
        if (m.state === matchStates.DONE) return;

        if (
          (
            this.isTeamPlaying(m.home.team) ||
            this.isTeamPlaying(m.away.team)
          ) && m.state !== matchStates.PLAYING
        ) {
          this.matches[i].state = matchStates.DISABLED;
        } else if(m.state === matchStates.DISABLED) {
          this.matches[i].state = matchStates.NONE;
        }
      });
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
