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

<script lang="ts">
import MutHeader from '@/components/header.vue';
import MutKnockoutMatch from '@/components/knockout-match.vue';
import MutMatches from '@/components/matches.vue';

import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { getRoundName } from '@/store/helpers/knockout';

const currentTournament = namespace('currentTournament');
const knockout = namespace('knockout');

@Component({
  components: {
    MutHeader,
    MutKnockoutMatch,
    MutMatches,
  },
})
export default class Knockout extends Vue {
  @currentTournament.Getter('slug') public slug!: string;
  @knockout.Getter('rounds') public rounds!: any[];
  @knockout.Getter('round') public activeRound!: any;
  @knockout.Getter('activeRoundId') public activeRoundId!: any;
  @knockout.Getter('activeRoundState') public activeRoundState!: any;
  @knockout.Getter('winner') public winner!: any;
  @knockout.Getter('complete') public tournamentComplete!: any;

  public internalRounds: any[] = [];
  public view: string = 'tree';
  public completeRound = false;

  @Watch('activeRoundId') public onActiveRoundIdChange(val: any) {
    this.completeRound = false;
    this.splitRounds();
  }

  public created() {
    this.view =
      this.startRoundState || this.tournamentComplete ? 'tree' : 'matches';
  }

  public beforeMount() {
    if (!this.rounds.length) {
      this.$store.dispatch('knockout/generate').then(() => {
        this.splitRounds();
      });
    } else {
      this.splitRounds();
    }
  }

  get totalRoundsClass() {
    return `bracket--${this.rounds.length}`;
  }

  get startRoundState() {
    return this.activeRoundState === 0;
  }

  public getNameOfRound(round: any) {
    return getRoundName(round.totalTeams);
  }

  public toggleView(state: any) {
    this.view = state;
  }

  public getActiveRoundName() {
    return getRoundName(this.activeRound.length);
  }

  public matchUpdate(event: any) {
    this.$store.dispatch('knockout/updateMatch', event.match);
  }

  public allMatchesPlayed() {
    this.completeRound = true;
  }

  public complete() {
    this.view = 'tree';
    this.$store.dispatch('knockout/completeRound').then(() => {
      if (this.winner) {
        this.$router.push(`/results/${this.slug}`);
      }
    });
  }

  public startRound() {
    this.view = 'matches';
    this.$store.dispatch('knockout/startRound');
  }

  public isInactive(round: any) {
    return round > this.activeRoundId ? 'round--inactive' : '';
  }

  private splitRounds() {
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
          classes: `round${i + 1} round--left`,
        });

        this.internalRounds.push({
          matches: round.slice(half, full),
          round: i,
          totalTeams: round.length,
          classes: `round${i + 1} round--right`,
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
</script>

<style lang="scss" scoped>
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
