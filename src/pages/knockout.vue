<template lang="pug">
    div
      .bracket
        .round(v-for="round in rounds" :class="round.classes")
          h1 {{ round.name }}
          .matches
            mut-knockout-match(v-for="match in round.matches" :home="match.home" :away="match.away")
            .winner(v-if="round.name === 'Finals'")
                  span 🏆 As Roma 🏆
</template>

<script>
import * as faker from "faker";

export default {
  data: () => ({
    rounds: [
      {
        name: "Round 1",
        classes: "round1 round--left",
        matches: []
      },
      {
        name: "Round 1",
        classes: "round1 round--right",
        matches: []
      },
      {
        name: "Round 2",
        classes: "round2 round--left",
        matches: []
      },
      {
        name: "Round 2",
        classes: "round2 round--right",
        matches: []
      },
      {
        name: "Round 3",
        classes: "round3 round--left",
        matches: []
      },
      {
        name: "Round 3",
        classes: "round3 round--right",
        matches: []
      },
      {
        name: "Semi-Finals",
        classes: "semi-finals round--left",
        matches: []
      },
      {
        name: "Semi-Finals",
        classes: "semi-finals round--right",
        matches: [
        ]
      },
      {
        name: "Finals",
        classes: "finals",
        matches: []
      }
    ]
  }),

  beforeMount() {
    for (let i = 0; i < this.rounds.length; i++) {
      let number;

      switch (i) {
        case 0:
        case 1:
          number = 8;
          break;
        case 2:
        case 3:
          number = 4;
          break;
        case 4:
        case 5:
          number = 2;
          break;
        default:
          number = 1;
      }

      for (let y = 0; y < number; y++) {
        const home = {
          club: faker.name.firstName(),
          score: faker.random.number(10)
        };

        const away = {
          club: faker.name.firstName(),
          score: faker.random.number(10)
        };

        if (home.score === away.score) {
          home.penaltyScore = faker.random.number(5);
          away.penaltyScore = faker.random.number(5);
        }

        this.rounds[i].matches.push({
          home,
          away
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bracket {
  padding: 10px;
  box-sizing: border-box;
  min-height: calc(100vh - 20px);
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
    grid-template-rows: 1fr 1fr 200px minmax(1fr, 200px);
    grid-template-areas:
      "round1 round2-left round3-left"
      "round3-right round2-right round1"
      "semi-finals-left . semi-finals-right"
      ". finals .";
    grid-gap: 10px;
  }

  .round {
    display: grid;
    grid-template-rows: 40px 1fr;

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

  .semi-finals {
    &.round--left {
      grid-area: semi-finals-left;
    }

    &.round--right {
      grid-area: semi-finals-right;
    }
  }

  .finals {
    grid-area: finals;
  }
}

@media screen and (min-width: 1640px) {
  .bracket {
    grid-auto-columns: minmax(50px, 1fr);
    grid-template-areas: "round1-left round2-left round3-left semi-finals-left finals semi-finals-right round3-right round2-right round1-right";
  }

  .round.finals {
    .matches {
      align-content: center;
    }
  }
}
</style>
