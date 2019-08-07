<template lang="pug">
    .page.knockout
      mut-header
        .button.button--small.button--secondary(v-if="view === 'matches' && !startRoundState" @click="toggleView('tree')") switch to tree view
        .button.button--small.button--secondary(v-if="view === 'tree' && !startRoundState" @click="toggleView('matches')") switch to matches view

      .page__content
        .button.button--tertiary.next-round(@click="startRound" v-if="startRoundState") Start next round
        .button.button--tertiary.next-round(@click="complete" v-if="completeRound && view === 'tree'") Complete Round

        template(v-if="view === 'matches'")
          h3 {{ getActiveRoundName() }}
          mut-matches(:matches="activeRound" @update="matchUpdate" @done="allMatchesPlayed" :noTieAllowed="true")
          .button.button--tertiary(@click="complete" v-if="completeRound") Complete Round

        .bracket(:class="totalRoundsClass" v-if="view === 'tree'")
          .round(v-for="round in internalRounds" :class="[round.classes, isInactive(round.round)]")
            h3 {{ getNameOfRound(round) }}
            .matches
              mut-knockout-match(v-for="match in round.matches" :home="match.home" :away="match.away")

</template>

<script>

import { mapGetters } from 'vuex';
import { getRoundName } from '../helpers/knockout'

export default {
  data: () => ({
    internalRounds: [],
    view: undefined,
    completeRound: false,
  }),

  beforeMount() {
    if (!this.rounds.length) {
      this.$store.dispatch('knockout/generate')
          .then(() => {
              this.splitRounds();
          });
    } else {
      this.splitRounds();
    }
  },

  created() {
    this.view = this.startRoundState || this.tournamentComplete ? 'tree' : 'matches';
  },

  computed: {
    ...mapGetters({
      slug: 'currentTournament/slug',
      rounds: 'knockout/rounds',
      activeRound: 'knockout/round',
      activeRoundId: 'knockout/activeRoundId',
      activeRoundState: 'knockout/activeRoundState',
      winner: 'knockout/winner',
      tournamentComplete: 'knockout/complete'
    }),

    totalRoundsClass() {
      return `bracket--${this.rounds.length}`;
    },

    startRoundState() {
      return this.activeRoundState === 0;
    },

  },

  watch: {
      activeRoundId: function (val) {
        this.completeRound = false;
        this.splitRounds();
       }
  },

  methods: {
    getNameOfRound(round) {
      return getRoundName(round.totalTeams);
    },

    toggleView(state) {
      this.view = state;
    },

    getActiveRoundName() {
      return getRoundName(this.activeRound.length);
    },

    matchUpdate(event) {
      this.$store.dispatch("knockout/updateMatch", event.match);
    },

    allMatchesPlayed() {
      this.completeRound = true;
    },

    complete() {
      this.view = 'tree';
      this.$store.dispatch('knockout/completeRound')
        .then(() => {
          if (this.winner) {
            this.$router.push(`/results/${this.slug}`);
          }
        });
    },

    startRound() {
      this.view = 'matches';
      this.$store.dispatch('knockout/startRound');
    },

    isInactive(round) {
      return round > this.activeRoundId ? 'round--inactive' : '';
    },

  splitRounds() {
    this.internalRounds = [];

    // TODO :: inactive state does not get updated on next round...
    for (let i = 0; i < this.rounds.length; i++) {
      const round = this.rounds[i] || [];

      if (round.length % 2 === 0) {
        const half = round.length / 2;
        const full = round.length;

        this.internalRounds.push({
          matches: round.slice(0, half),
          round: i,
          totalTeams: round.length,
          classes: `round${i + 1} round--left`
        });

        this.internalRounds.push({
          matches: round.slice(half, full),
          round: i,
          totalTeams: round.length,
          classes: `round${i + 1} round--right`
        });
      } else {
        this.internalRounds.push({
          matches: round,
          totalTeams: round.length,
          round: i,
        });
      }
    }
  }
  }
};
</script>

<style scoped>
.bracket {
  padding: 10px;
  box-sizing: border-box;
  min-height: calc(100vh - 136px); // height of header, footer and padding
  color: #2c7399;
  font-family: "Roboto Condensed", sans-serif;
  width: 100%;
}

.round--inactive {
  opacity: 0.5;
}

.next-round {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  margin: 0 !important;
}

.matches {
  margin-top: 50px;
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

.round--right h1 {
    display: none;
}


.winner {
  position: relative;
  margin: 10px auto 0;
  font-size: 20px;
}

.winner span {
  color: goldenrod;
  text-align: center;
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
    width: 100%;
  }

  .round {
    display: grid;
    grid-template-rows: 30px 1fr;

    }

    round h1 {
      align-self: start;
  }

  .round--right h1 {
      display: block;
  }

  .round1.round--left {
      grid-area: round1-left;
  }

  .round.round--right {
      grid-area: round1-right;
    }

  .round2.round--left {
      grid-area: round2-left;
    }

  .round2.round--right {
      grid-area: round2-right;
    }

  .round3.round--left {
      grid-area: round3-left;
    }

  .round3.round--right {
    grid-area: round3-right;
  }

  .round4.round--left {
      grid-area: round4-left;
    }

  .round4.round--right {
      grid-area: round4-right;
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

  .round.finals .matches {
      align-content: center;
  }
}
</style>
