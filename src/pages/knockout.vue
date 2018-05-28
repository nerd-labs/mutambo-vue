<template lang="pug">
    div
      .bracket(:class="totalRoundsClass")
        .round(v-for="round in internalRounds" :class="round.classes")
          h2 {{ getNameOfRound(round) }}
          .matches
            mut-knockout-match(v-for="match in round.matches" :home="match.home" :away="match.away")
            .winner(v-if="getNameOfRound(round) === 'Final'")
                span 🏆 As Roma 🏆
</template>

<script>

import { mapGetters } from 'vuex';
import { getRoundName } from '../helpers/knockout'

export default {
  data: () => ({
    internalRounds: [],
  }),

  computed: {

    ...mapGetters({
      rounds: 'knockout/rounds',
    }),

    totalRoundsClass() {
      return `bracket--${this.rounds.length}`;
    }
  },
  beforeMount() {
    for (let i = 0; i < this.rounds.length; i++) {
      const round = this.rounds[i] || [];

      if (round.length % 2 === 0) {
        const half = round.length / 2;
        const full = round.length;

        this.internalRounds.push({
          matches: round.slice(0, half),
          round: i + 1,
          totalTeams: round.length,
          classes: `round${i + 1} round--left`
        });

        this.internalRounds.push({
          matches: round.slice(half, full),
          round: i + 1,
          totalTeams: round.length,
          classes: `round${i + 1} round--right`
        });
      } else {
        this.internalRounds.push({
          matches: round,
          totalTeams: round.length,
          round: i + 1
        });
      }
    }
  },

  methods: {
    getNameOfRound(round) {
      return getRoundName(round.totalTeams);
    }
  }
};
</script>

<style lang="scss" scoped>
.bracket {
  padding: 10px;
  box-sizing: border-box;
  min-height: calc(100vh - 136px); // height of header, footer and padding
  color: #2c7399;
  font-family: "Roboto Condensed", sans-serif;
}

.matches {
  display: grid;
  grid-gap: 10px;
  grid-auto-columns: 1fr;
  align-content: space-around;
}

.round h1 {
  font-size: 20px;
  margin: 5px 0;
  text-align: center;
}

.round--right {
  h1 {
    display: none;
  }
}

.club {
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  height: 30px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;

  & > span:nth-child(2) {
    margin-left: 5px;
  }

  span > span {
    font-size: 13px;
    color: lightgrey;
  }
}

.winner {
  position: relative;
  margin: 10px auto 0;
  font-size: 20px;

  span {
    color: goldenrod;
    text-align: center;
  }
}

@media screen and (min-width: 768px) {
  .bracket {
    display: grid;
    grid-auto-columns: minmax(50px, 1fr);
    grid-template-rows: 1fr minmax(1fr, 200px);
    grid-template-areas:
      "round1-left round1-right"
      "round2-left round2-right"
      "round3-left round3-right"
      "round4-left round4-right"
      "round5 .";
    grid-gap: 10px;
  }

  .round {
    display: grid;
    grid-template-rows: 100px 1fr;

    h1 {
      align-self: start;
    }
  }

  .round--right {
    h1 {
      display: block;
    }
  }

  .round1 {
    &.round--left {
      grid-area: round1-left;
    }

    &.round--right {
      grid-area: round1-right;
    }
  }

  .round2 {
    &.round--left {
      grid-area: round2-left;
    }

    &.round--right {
      grid-area: round2-right;
    }
  }

  .round3 {
    &.round--left {
      grid-area: round3-left;
    }

    &.round--right {
      grid-area: round3-right;
    }
  }

  .round4 {
    &.round--left {
      grid-area: round4-left;
    }

    &.round--right {
      grid-area: round4-right;
    }
  }

  .round5 {
    grid-area: round5;
  }
}

@media screen and (min-width: 1640px) {
  .bracket {
    grid-auto-columns: minmax(50px, 1fr);
  }

  .bracket--1 {
    grid-template-areas: "round1";
  }

  .bracket--2 {
    grid-template-areas: "round1-left round2 round1-right";
  }

  .bracket--3 {
    grid-template-areas: "round1-left round2-left round3 round2-right round1-right";
  }

  .bracket--4 {
    grid-template-areas: "round1-left round2-left round3-left round4 round3-right round2-right round1-right";
  }

  .bracket--5 {
    grid-template-areas: "round1-left round2-left round3-left round4-left round5 round4-right round3-right round2-right round1-right";
  }

  .round.finals {
    .matches {
      align-content: center;
    }
  }
}
</style>
