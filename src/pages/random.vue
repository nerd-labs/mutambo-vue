<template lang="pug">
  .page.groupstage-draw
    mut-header
      .button.button--small.button--secondary test

    .page__content
      h1.loading(v-show="loading && !showAllTeams") 🥁

      .name(v-show="!loading && !showAllTeams && !done")
        h1 {{currentTeam.club}}
        .player {{currentTeam.player}}

      h1.name(v-show="done") 🦄 Draw finished 🦄

      .teams(v-bind:class="{'teams--active': showAllTeams}")
        .team(v-for="team in animatedTeams" v-bind:class="{'team--active': team.active}")
          .u-box
            div {{ team.club }}
            div {{ team.player }}

      a.button.button--tertiary(@click="start" v-if="done")
        | Start {{ type }}
      a.button.button--tertiary(@click="skip" v-if="!done")
        | Skip
</template>

 <script>

import IdGenerator from "../services/id-generator";
import { mapGetters } from 'vuex';
import { shuffle } from '../helpers/shuffle';

const ANIMATION_TIME = 2000;

export default {
  mounted () {
    this.randomizeTeams();

    this.startDraw();
  },

  data: () => ({
    animatedTeams: [],
    currentTeam: {},
    loading: true,
    done: false,
    showAllTeams: false,
    loadingTimeout: undefined,
    nameTimeout: undefined,
  }),

  computed: {
    ...mapGetters({
      slug: 'currentTournament/slug',
      teams: 'currentTournament/teams',
      type: 'currentTournament/type',
    }),

    clubs() {
      return this.teams.map(t => t.club);
    },

    players() {
      return this.teams.map(t => t.player);
    }
  },

  methods: {
    randomizeTeams() {
      const shuffledClubs = shuffle(this.clubs);
      const shuffledPlayers = shuffle(this.players);

      const shuffledTeams = [];

      shuffledPlayers.forEach((club, index) => {
        shuffledTeams.push({
          club: shuffledClubs[index],
          player: shuffledPlayers[index],
          id: IdGenerator.id(),
        });
      });

      this.$store.dispatch("currentTournament/randomizeTeams", shuffledTeams);
    },

    animate(index) {
      this.loading = true;

      this.loadingTimeout = setTimeout(() => {
        this.loading = false;

        this.currentTeam = this.animatedTeams[index];

        this.animatedTeams[index].active = true;

        index++;

        if (index >= this.teams.length) {
          setTimeout(() => {
            this.done = true;
          }, ANIMATION_TIME);
          return;
        }

        this.nameTimeout = setTimeout(() => {
          this.animate(index);
        }, ANIMATION_TIME);
      }, ANIMATION_TIME / 2);
    },

    skip() {
      clearTimeout(this.loadingTimeout);
      clearTimeout(this.nameTimeout);

      this.showAllTeams = true;
      this.done = true;
    },

    startDraw() {
      const tmp = JSON.parse(JSON.stringify(this.teams));

      tmp.forEach((team) => {
        team.active = false;
      });

      this.animatedTeams = tmp;

      this.animate(0);
    },

    start() {
      this.$router.push(`/summary/${this.slug}`);
    }
  },
};
</script>

<style scoped>
@keyframes drumroll {
    0%,
    49% {
        transform: scaleX(1);
    }
    50%,
    100% {
        transform: scaleX(-1);
    }
}


.loading,
.name {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
}

.loading {
  animation-name: drumroll;
  animation-duration: .2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  font-size: 144px;
}

.name,
.name h1 {
  color: var(--light-sea-green);
  font-size: 72px;
}

.player {
  color: var(--greyish-brown);
  font-size: 36px;
}

.teams {
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
  width: 100%;
}

.team {
  margin-bottom: 10px;
  opacity: 0;
  padding-right: 20px;
  transition: opacity .2s linear;
  width: 25%;
}

.team .u-box {
  height: 100%;
  min-width: auto;
}

.team--active {
  opacity: 1;
}

.teams--active .team {
    opacity: 1;
}
</style>
