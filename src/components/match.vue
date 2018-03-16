<template lang="pug">
  .match(:class="{'match--playing': match.state === 'playing', 'match--done': match.state === 'done' , 'match--disabled': match.state === 'disabled'}")
    .math__side.match__side--home(:class="{'match__side--winner': match.home.winner ===  true, 'match__side--loser': match.home.winner === false}")
      .match__team
        .match__name {{ match.home.team }}
        .match__player {{ match.home.player }}

      .match__score {{ match.home.score }}

      input.match__score--input(type="number" v-model="match.home.score" min="0")

    .match__center
      .match__playing live
      .match__divider -
      button.match__button.match__button--start(@click="startMatch") start match
      button.match__button.match__button--end(@click="endMatch") end match

    .math__side.match__side--away(:class="{'match__side--winner': match.away.winner ===  true, 'match__side--loser': match.away.winner === false}")
      .match__team
        .match__name {{ match.away.team }}
        .match__player {{ match.away.player }}

      .match__score {{ match.away.score }}

      input.match__score--input(type="number" v-model="match.away.score" min="0")
</template>

<script>
import { matchStates } from '../config';

export default {
  props: {
    match: {
      required: true
    }
  },

  methods: {
    startMatch() {
      this.match.state = matchStates.PLAYING;

      this.$emit("update");
    },

    endMatch() {
      this.match.state = matchStates.DONE;

      if (this.match.home.score > this.match.away.score) {
        this.match.home.winner = true;
        this.match.away.winner = false;
      } else if (this.match.home.score < this.match.away.score) {
        this.match.home.winner = false;
        this.match.away.winner = true;
      }

      this.$emit("update");
    }
  }
};
</script>

<style lang="scss">
.match {
  background-color: white;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  height: 100px;
  padding: 20px;
}

.match--playing {
  .match__playing,
  .match__score--input,
  .match__button--end {
    display: block;
  }

  .match__button--start {
    display: none;
  }
}

.match--disabled {
  opacity: .25;

  .match__button,
  .match__score {
    display: none;
  }
}

.match--done {
  background-color: limegreen;
  color: white;

  .match__score {
    color: white;
  }

  .match__side--loser .match__team {
    opacity: .5;
  }

  .match__button,
  .match__playing {
    display: none;
  }

  .match__score,
  .match__divider {
    display: block;
  }
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

  &::after {
    animation-name: move;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-color: currentColor;
    border-radius: 50%;
    content: '';
    display: block;
    height: 3px;
    right: -10px;
    position: absolute;
    top: 50%;
    width: 3px;
  }
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
  opacity: .5;
}

.match__score,
.match__score--input {
  display: none;
  color: limegreen;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  width: 100px;

  &:focus {
    outline: none;
  }
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
