<template lang="pug">
    div.match-template
      .match.u-box(:class="{'match--playing': internalMatch.state === 'playing', 'match--done': internalMatch.state === 'done' , 'match--disabled': internalMatch.state === 'disabled'}" @click="editMatch")
        .math__side.match__side--home(:class="{'match__side--winner': internalMatch.winner ===  1, 'match__side--loser': internalMatch.winner === 2}")
          .match__team
            .match__club {{ internalMatch.home.club }}
            .match__player {{ internalMatch.home.player }}

          .match__score {{ internalMatch.home.score }}

          input.match__score--input(type="number" v-model="internalMatch.home.score" min="0")

        .match__center
          .match__playing live
          .match__divider -
          button.match__button.match__button--start(@click="startMatch") start match
          button.match__button.match__button--end(@click="endMatch") end match

        .math__side.match__side--away(:class="{'match__side--winner': internalMatch.winner ===  2, 'match__side--loser': internalMatch.winner === 1}")
          .match__team
            .match__club {{ internalMatch.away.club }}
            .match__player {{ internalMatch.away.player }}

          .match__score {{ internalMatch.away.score }}

          input.match__score--input(type="number" v-model="internalMatch.away.score" min="0")
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

<style>
.match-template {
    position: relative;
}

/* // .internal-badge .badge__badge {
//   // overwrite with custom css ;)
//   border-radius: 0 !important;
//   right: 0 !important;
//   top: -20px !important;
//   width: 200px !important;
// } */

.match {
  background-color: white;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  height: 100px;
  padding: 20px;
}

.match--playing .match__playing,
.match--playing .match__score--input,
.match--playing  .match__button--end {
  display: block;
}

.match--playing .match__button--start {
  display: none;
}

.match--disabled {
  opacity: 0.25;
}

.match--disabled .match__button,
.match--disabled .match__score {
    display: none;
}

.match--done {
  background-color: limegreen;
  color: white;
}

.match--done .match__score {
  color: white;
}

.match--done .match__side--loser .match__team {
    opacity: 0.5;
}

.match--done  .match__button,
.match--done .match__playing {
    display: none;
}

.match--done  .match__score,
.match--done .match__divider {
    display: block;
}

.match__center {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: center;
}

.match__button {
  background-color: transparent;
  color: limegreen;
  cursor: pointer;
  border: 1px solid limegreen;
  border-radius: 5px;
  padding: 4px;
}

.match__button--end {
  border: none;
  color: #999;
  display: none;
  margin-top: 10px;
  text-decoration: underline;
}

.match__divider {
  display: none;
  font-size: 40px;
  font-weight: 300;
}

.match__playing {
  color: red;
  display: none;
  position: relative;
}

.match__playing::after {
    animation-name: move;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-color: currentColor;
    border-radius: 50%;
    content: "";
    display: block;
    height: 3px;
    right: -10px;
    position: absolute;
    top: 50%;
    width: 3px;
}

.math__side {
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.match__side--away {
  flex-direction: row-reverse;
  text-align: right;
}

.match__team {
  font-size: 20px;
  font-weight: 300;
}

.match__player {
  font-size: 12px;
  line-height: 20px;
  opacity: 0.5;
}

.match__score,
.match__score--input {
  display: none;
  color: limegreen;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  width: 100px;
}

.match__score:focus,
.match__score--input:focus {
  outline: none;
}

@keyframes move {
  from {
    transform: translateY(-200%);
  }
  to {
    transform: translateY(200%);
  }
}
</style>
