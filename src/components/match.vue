<template lang="pug">
  .match.u-box.u-box--large(:class="{'match--playing': internalMatch.state === 'playing', 'match--done': internalMatch.state === 'done' , 'match--disabled': internalMatch.state === 'disabled', 'match--error': alert}")
    .match__team(:class="{'match__team--winner': internalMatch.winner ===  1, 'match__team--loser': internalMatch.winner === 2 }")
      .team__name {{ internalMatch.home.club }}
      .team__player {{ internalMatch.home.player }}

    .match__info(@click="editMatch")
      .match__live live
      .match__score
        span(:class="{'match__score--winner': internalMatch.winner ===  1, 'match__score--loser': internalMatch.winner === 2}") {{ internalMatch.home.score }}
        span(:class="{'match__score--loser': internalMatch.winner ===  1, 'match__score--winner': internalMatch.winner === 2}") {{ internalMatch.away.score }}

      .match__score--input
        input(type="number" v-model="internalMatch.home.score" min="0")
        input(type="number" v-model="internalMatch.away.score" min="0")

      a.match__start(@click="startMatch") start match

      a.match__end(@click="endMatch") end match

    .match__team(:class="{'match__team--loser': internalMatch.winner ===  1, 'match__team--winner': internalMatch.winner === 2}")
      .team__name {{ internalMatch.away.club }}
      .team__player {{ internalMatch.away.player }}

    .match__error
      template(v-if="alert") match can’t end in a tie
</template>

<script>
import { matchStates, matchWinner } from "../config";

export default {
  data: () => ({
    internalMatch: undefined,
    alert: false,
  }),

  props: {
    match: {
      required: true
    },
    noTieAllowed: {
      required: false,
    }
  },

  beforeMount() {
    this.internalMatch = this.match;
  },

  methods: {
    startMatch() {
      this.$emit("update", {
        match: this.internalMatch,
        state: matchStates.PLAYING
      });
    },

    editMatch() {
      if (this.match.state === matchStates.DONE) {
        this.$emit("update", {
          match: this.internalMatch,
          state: matchStates.PLAYING
        });
      }
    },

    endMatch(event) {
      let winner = matchWinner.TIE;

      // convert to number
      this.internalMatch.home.score = parseInt(this.internalMatch.home.score);
      this.internalMatch.away.score = parseInt(this.internalMatch.away.score);

      if (this.internalMatch.home.score > this.internalMatch.away.score) {
        winner = matchWinner.HOME;
      } else if (
        this.internalMatch.home.score < this.internalMatch.away.score
      ) {
        winner = matchWinner.AWAY;
      }

      if (this.noTieAllowed && winner === matchWinner.TIE) {
        this.alert = true;

        setTimeout(() => {
          this.alert = false;
        }, 2000);

        return;
      }

      this.$emit("update", {
        match: this.internalMatch,
        state: matchStates.DONE,
        winner
      });

      event.stopPropagation();
    }
  }
};
</script>

<style scoped>
@keyframes move {
  from {
    transform: translateY(-200%);
  }
  to {
    transform: translateY(200%);
  }
}

.match {
  align-items: center;
  box-sizing: border-box;;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  min-height: 150px;
  position: relative;
  overflow: hidden;
}

.match__team {
  flex-basis: 33%;
  flex-shrink: 0;
}

.match__team:last-child {
  text-align: right;
}

.team__name {
  color: var(--greyish-brown);
  font-size: 16px;
  margin-bottom: 5px;
}

.team__player {
  color: var(--warm-grey);
  font-size: 14px;
}

.match__info {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.match__live {
  align-items: center;
  color: var(--live-red);
  display: none;
  font-size: 12px;
  flex-shrink: 0;
  position: relative;
  top: -15px;
}

.match__live::after {
  animation-name: move;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius: 3px;
  background-color: var(--live-red);
  content: '';
  display: inline-block;;
  height: 3px;
  margin-left: 5px;
  width: 3px;
}

.match__score {
  color: var(--light-sea-green);
  display: none;
  font-size: 50px;
  position: relative;
  text-align: center;
}

.match__score span {
  display: inline-block;
  margin-left: 10px;
  text-align: center;
  width: 70px;
}

.match__score span:first-child {
  margin-left: 0;
  margin-right: 10px;
}

.match__score::after,
.match__score--input::after {
  content: '-';
  color: var(--warm-grey);
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.match__score--input {
  display: none;
  position: relative;
}

.match__score--input input {
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  color: var(--light-sea-green);
  font-family: var(--font-main);
  font-size: 50px;
  margin-left: 10px;
  padding: 0;
  text-align: center;
  width: 70px;
}

.match__score--input input:first-child {
  margin-left: 0;
  margin-right: 10px;
}

.match__score--input input::-webkit-inner-spin-button,
.match__score--input input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.match__score--input input:focus {
  outline: none;
}

.match__start,
.match__end {
  cursor: pointer;
  font-size: 12px;
  flex-basis: 33%;
  text-decoration: underline;
}

.match__start {
  color: var(--bright-sky-blue);
}

.match__end {
  color: var(--warm-grey);
  display: none;
  position: relative;
  bottom: -15px;
}

/* STATE // PLAYING */
.match--playing .match__score--input,
.match--playing  .match__end {
  display: block;
}

.match--playing .match__live {
  display: flex;
}

.match--playing .match__score,
.match--playing .match__start {
  display: none;
}

/* STATE // DISABLED */
.match--disabled {
  opacity: 0.25;
}

.match--disabled .match__start {
  display: none;
}

/* STATE // DONE */
.match--done {
  background-color: rgba(144, 238, 144, .25);
}

.match--done .match__team--loser,
.match--done .match__score--loser {
    opacity: 0.4;
}

.match--done .match__start,
.match--done .match__end,
.match--done .match__playing {
    display: none;
}

.match--done .match__score,
.match--done .match__divider {
    display: block;
}

.match--done .match__info {
  cursor: pointer;
}

/* STATE // ERROR */

.match--error .match__error {
    transform: translateY(0);
}

.match__error {
  align-items: center;
  background-color: var(--live-red);
  border-radius: 8px 8px 0 0;
  bottom: 0;
  box-sizing: border-box;
  color: var(--white);
  display: flex;
  font-size: 12px;
  height: 40px;
  justify-content: center;
  left: 0;
  margin: 0 auto;
  padding: 5px 30px;
  position: absolute;
  right: 0;
  width: 210px;
  transform: translateY(50px);
  transition: transform 300ms linear;
}

</style>
