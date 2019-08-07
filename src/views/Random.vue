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

 <script lang="ts">
import MutHeader from '@/components/header.vue';

import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { shuffle } from '@/store/helpers/shuffle';
import { IdGenerator } from '@/store/helpers/id-generator';

const currentTournament = namespace('currentTournament');
const ANIMATION_TIME = 2000;

@Component({
  components: {
    MutHeader,
  },
})
export default class Detail extends Vue {
  @currentTournament.Getter('slug') public slug!: any;
  @currentTournament.Getter('teams') public teams!: any;
  @currentTournament.Getter('type') public type!: any;

  public animatedTeams: any[] = [];
  public currentTeam: {} = {};
  public loading: boolean = true;
  public done: boolean = false;
  public showAllTeams: boolean = false;
  public loadingTimeout: number = 0;
  public nameTimeout: number = 0;

  public mounted() {
    this.randomizeTeams();

    this.startDraw();
  }

  public beforeDestroy() {
    if (this.loadingTimeout) { clearTimeout(this.loadingTimeout); }
    if (this.nameTimeout) { clearTimeout(this.nameTimeout); }
  }

  get clubs() {
    return this.teams.map((t: any) => t.club);
  }

  get players() {
    return this.teams.map((t: any) => t.player);
  }

  public randomizeTeams() {
    const shuffledClubs = shuffle(this.clubs);
    const shuffledPlayers = shuffle(this.players);

    const shuffledTeams: any[] = [];

    shuffledPlayers.forEach((club: any, index: any) => {
      shuffledTeams.push({
        club: shuffledClubs[index],
        player: shuffledPlayers[index],
        id: IdGenerator.id(),
      });
    });

    this.$store.dispatch('currentTournament/randomizeTeams', shuffledTeams);
  }

  public animate(index: any) {
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
  }

  public skip() {
    clearTimeout(this.loadingTimeout);
    clearTimeout(this.nameTimeout);

    this.showAllTeams = true;
    this.done = true;
  }

  public startDraw() {
    const tmp = JSON.parse(JSON.stringify(this.teams));

    tmp.forEach((team: any) => {
      team.active = false;
    });

    this.animatedTeams = tmp;

    this.animate(0);
  }

  public start() {
    if (this.type === 'groupstage') {
      this.$router.push(`/${this.type}/draw/${this.slug}`);
    } else {
      this.$router.push(`/${this.type}/${this.slug}`);
    }
  }
}
</script>

<style lang="scss" scoped>
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
  animation-duration: 0.2s;
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
  transition: opacity 0.2s linear;
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
