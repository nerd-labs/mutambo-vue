<template lang="pug">
  .page.detail
    mut-header(:back="'create'")

    .page__content
      h3 ⚙️ {{ type }} settings ⚙️

      template(v-if="type === 'league'")
        .form__group
          label Total players
          input(type='number' v-model="totalPlayers")
        .form__group
          label Number of plays against each team
          input(type='number' v-model="numberOfPlays")

      template(v-if="type === 'knockout'")
        .form__group
          label Total players
          select(v-model="totalPlayers")
            option(v-for="totalPlayers in knockoutTotalPlayerOptions" :value="totalPlayers") {{ totalPlayers }}

      template(v-if="type === 'groupstage'")
        .form__group
          label Total players
          input(type='number' v-model="totalPlayers")

        .form__group
          label Number of proceeding players
          select(v-model="numberOfProceedingPlayers")
            option(v-for="totalPlayers in numberOfProceedingPlayersOptions" :value="totalPlayers") {{ totalPlayers }}

      a.button.button--tertiary(@click="submit()")
        | submit
</template>

<script lang="ts">
import MutHeader from '@/components/header.vue';

import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const currentTournament = namespace('currentTournament');

@Component({
  components: {
    MutHeader,
  },
})
export default class Detail extends Vue {
  @currentTournament.Getter('name') public name!: string;
  @currentTournament.Getter('type') public type!: string;
  @currentTournament.Getter('tournament') public tournament!: any;
  @currentTournament.Getter('totalTeams') public totalTeams!: any;
  @currentTournament.Getter('slug') private slug!: string;

  public readonly knockoutTotalPlayerOptions = [2, 4, 8, 16, 32];
  public totalPlayers: number = 0;
  public numberOfPlays: number = 0;
  public numberOfProceedingPlayers: number = 0;

  public beforeMount() {
    switch (this.type) {
      case 'knockout':
        this.totalPlayers = this.tournament.teams.length || this.knockoutTotalPlayerOptions[0];
        break;
      case 'groupstage':
        this.totalPlayers = this.tournament.teams.length || this.knockoutTotalPlayerOptions[1];
        this.numberOfProceedingPlayers =
          this.tournament.details.numberOfProceedingPlayers || this.knockoutTotalPlayerOptions[0];
        break;
      case 'league':
        this.totalPlayers = this.tournament.teams.length || 2;
        this.numberOfPlays = this.tournament.details.numberOfPlays || 1;
        break;
    }
  }

  public get numberOfProceedingPlayersOptions() {
    if (this.type === 'groupstage') {
      return this.knockoutTotalPlayerOptions.filter((totalPlayers: any) => {
        return totalPlayers <= this.totalPlayers;
      });
    } else {
      return 0;
    }
  }

  public submit() {
    // remove from details if undefined :)
    const details = JSON.parse(JSON.stringify({
      numberOfPlays: this.numberOfPlays,
      numberOfProceedingPlayers: this.numberOfProceedingPlayers,
    }));

    if (details) {
      this.$store.dispatch('currentTournament/updateDetails', details);
    }

    // create array of total players
    const teams = Array.from({ length: this.totalPlayers }).map(() => ({}));
    if (teams) {
      this.$store.dispatch('currentTournament/addEmptyTeams', teams);
    }

    this.$router.push(`/teams/${this.slug}`);
  }
}
</script>
