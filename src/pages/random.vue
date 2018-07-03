<template lang="pug">
  .page.groupstage-draw
    mut-header
      a.button.button--small.button--secondary(@click="skip" v-if="!done")
        | Skip

    .page__content
      h1.loading(v-show="loading && !showAllTeams") 🥁

      .name(v-show="!loading && !showAllTeams && !done")
        h1 {{currentTeam.club}}
        .player {{currentTeam.player}}

      h1.name(v-show="done") 🦄 Draw finished 🦄

      .teams(v-bind:class="{'teams--active': showAllTeams}")
        .team(v-for="team in animatedTeams" v-bind:class="{'team--active': team.active}")
          h3.team__club {{ team.club }}
          .team__player {{ team.player }}

      a.button.button--tertiary(@click="start" v-if="done")
        | Start {{ type }}

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
  max-width: 1440px;
}

.team {
  margin-bottom: 50px;
  text-align: center;
  transition: opacity .2s linear;
  width: 300px;
}

.team__club {
  margin-bottom: 15px;
  opacity: 0;
  text-align: center;
}

.team--active .team__club {
  opacity: 1;
}

</style>
