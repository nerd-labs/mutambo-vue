<template lang="pug">
  .matches
    mut-match-component(v-for="match in matches" :match="match" @update="matchUpdate" :noTieAllowed="noTieAllowed")
</template>

<script lang="ts">
import MutMatchComponent from '@/components/match.vue';

import { Component, Vue, Prop } from 'vue-property-decorator';
import { matchStates } from '@/store/config';
import { MutMatch } from '@/interfaces/match';

@Component({
  components: {
    MutMatchComponent,
  },
})
export default class MutMatches extends Vue {
  @Prop({ required: true }) public matches!: MutMatch[];
  @Prop({ required: false }) public noTieAllowed!: boolean;

  public activeTeams: string[] = [];
  public totalMatchesLeft = 0;

  public beforeMount() {
    if (this.allMatchedsPlayed()) {
      this.$emit('done');
    }
  }

  get isTeamPlaying() {
    return (team: string) => this.activeTeams.indexOf(team) > -1;
  }

  public allMatchedsPlayed() {
    const hasRemainingMatches = this.matches.every((match: MutMatch): boolean => {
      return match.state === matchStates.DONE;
    });

    return hasRemainingMatches;
  }

  public matchUpdate(event: any) {
    const index = this.matches.findIndex((m: MutMatch) => {
      return m.id === event.match.id;
    });

    if (index === -1) { throw new Error('match not found'); }

    this.matches[index].state = event.state;
    this.matches[index].winner = event.winner;

    this.activeTeams = [];

    const activeMatches = this.matches.filter(
      (m: MutMatch) => m.state === matchStates.PLAYING,
    );

    activeMatches.forEach((m: MutMatch) => {
      this.activeTeams.push(m.home.club);
      this.activeTeams.push(m.away.club);
    });

    this.matches.forEach((m, i) => {
      if (m.state === matchStates.DONE) { return; }

      if (
        (this.isTeamPlaying(m.home.club) ||
          this.isTeamPlaying(m.away.club)) &&
        m.state !== matchStates.PLAYING
      ) {
        this.matches[i].state = matchStates.DISABLED;
      } else if (m.state === matchStates.DISABLED) {
        this.matches[i].state = matchStates.NONE;
      }
    });

    this.$emit('update', {
      match: this.matches[index],
    });

    if (this.allMatchedsPlayed()) {
      this.$emit('done');
    }
  }

}
</script>

<style lang="scss" scoped>
.matches {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
</style>
