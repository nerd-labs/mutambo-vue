<template lang="pug">
  .page.groupstage-draw
    .page__header.u-background--gradient
      h1.page__title(@click="goToHome()") Mutambo
      h2.page__subtitle {{ name }}

    .page__content
      h1.loading(v-show="loading && !showAllTeams") 🥁
      h1.name(v-show="!loading && !showAllTeams") {{currentTeam.club}} ({{currentTeam.player}})
      h1.name(v-show="done") 🦄 Draw finished 🦄

      .groups(v-bind:class="{'groups--active': showAllTeams}")
        .group(v-for="group in animatedGroups")
          h3 {{group.name}}

          .team(v-for="team in group.teams" v-bind:class="{'team--active': team.active}") {{team.club}} ({{team.player}})

      a.button.button--tertiary(@click="startGroupstage" v-if="done")
        | Start groupstage
      a.button.button--tertiary(@click="skip" v-if="!done")
        | Skip
</template>

<script>
import { mapGetters } from "vuex";
import { shuffle } from '../helpers/shuffle';
import berger from '../helpers/berger';

const ANIMATION_TIME = 2000;

export default {
  mounted () {
    if (!this.groups.length) {
      this.generateGroups();
    }

    this.startDraw();
  },

  data: () => ({
    animatedGroups: [],
    currentTeam: {},
    loading: true,
    done: false,
    showAllTeams: false,
    loadingTimeout: undefined,
    nameTimeout: undefined,
  }),

  computed: {
    ...mapGetters({
      teams: 'currentTournament/teams',
      type: 'currentTournament/type',
      slug: 'currentTournament/slug',
      name: 'currentTournament/name',
      groups: 'groupstage/groups',
    })
  },

  methods: {
    goToHome() {
      this.$router.push('/');
    },

    getNumberOfGroups() {
      const numberOfTeams = this.teams.length;
      let numberOfGroups = numberOfTeams / 4;

      if (numberOfTeams >= 6 && numberOfTeams <= 8) {
        numberOfGroups = 2;
      }

      return Math.max(1, Math.floor(numberOfGroups));
    },

    generateGroups() {
      const numberOfGroups = this.getNumberOfGroups();
      const groups = [];

      for(let i = 0; i < numberOfGroups; i++) {
        //- create letter from index 1 = A, B = 2, ...
        const name = String.fromCharCode(97 + i).toUpperCase();
        groups[i] = {
          name: `Group ${name}`,
          teams: [],
          matches: [],
          table: [],
          completed: false,
        };
      }

      const shuffledTeams = shuffle(this.teams);

      shuffledTeams.forEach((team, index) => {
        const groupIndex = (index%numberOfGroups);
        groups[groupIndex].teams.push(team);
      });

      groups.forEach((group) => {
        const teams = JSON.parse(JSON.stringify(group.teams));
        const bergerTable = berger.getTable(teams);

        group.matches = [...bergerTable];

        group.matches.map(match => {
          match.away.score = 0;
          match.home.score = 0;
        });
      });

      this.$store.dispatch('groupstage/setGroups', { groups });
    },

    startDraw() {
      const tmp = JSON.parse(JSON.stringify(this.groups));

      tmp.forEach((group) => {
        group.teams.map((team) => {
          team.active = false;
        });
      });

      this.animatedGroups = tmp;

      this.animate(0, 0);
    },

    animate(currentGroupIndex, currentTeamIndex) {
      const currentGroup = this.groups[currentGroupIndex];

      this.loading = true;

      this.loadingTimeout = setTimeout(() => {
        this.loading = false;

        this.currentTeam = this.animatedGroups[currentGroupIndex].teams[currentTeamIndex];

        this.animatedGroups[currentGroupIndex].teams[currentTeamIndex].active = true;

        currentTeamIndex++;

        if (currentTeamIndex >= currentGroup.teams.length) {
          currentTeamIndex = 0;
          currentGroupIndex++;
        }

        if (currentGroupIndex >= this.groups.length) {
          this.done = true;
          return;
        }

        this.nameTimeout = setTimeout(() => {
          this.animate(currentGroupIndex, currentTeamIndex);
        }, ANIMATION_TIME);
      }, ANIMATION_TIME / 2);
    },

    skip() {
      clearTimeout(this.loadingTimeout);
      clearTimeout(this.nameTimeout);

      this.showAllTeams = true;
      this.done = true;
    },

    startGroupstage() {
      this.$router.push(`/${this.type}/${this.slug}`);
    }
  }

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

.page__content {
  padding-top: 100px;
}

.groups {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: space-between;
}

.group {
  box-sizing: border-box;
  margin-top: 50px;
  padding-right: 20px;
  width: 25%;
}

.group h3 {
  margin-bottom: 15px;
}

.loading, .name {
  align-items: center;
  display: flex;
  height: 150px;
}

.loading {
  animation-name: drumroll;
  animation-duration: .2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  font-size: 144px;
}

.team {
  opacity: 0;
  transition: opacity .2s linear;
  margin-bottom: 10px;
}

.name {
  color: var(--light-sea-green);
}

.team--active {
  opacity: 1;
}

.groups--active .team {
    opacity: 1;
}
</style>
