<template lang="pug">
  .page.groupstage
    mut-header
      .button.button--small.button--secondary(v-if="view === 'matches'" @click="toggleView('table')") switch to table view
      .button.button--small.button--secondary(v-if="view === 'table'" @click="toggleView('matches')") switch to matches view

    .page__content

      .groupstage__shortcuts(ref="shortcuts")
        span(@click="scrollToGroup(group.name)" v-for="group in groups") {{ group.name }}

      template(v-for="(group, index) in groups")
        h3.group__title(:ref="generateId(group.name)") {{ group.name }}

        template(v-if="view === 'matches'")
          mut-matches(:matches="group.matches" @update="matchUpdate(index, $event)" @done="allMatchesPlayed(index)")

        template(v-if="view === 'table'")
          mut-table(:data="results(group)")

      a.button.button--tertiary(@click="endGroupstage" v-if="done")
        | End groupstage
</template>

<script lang="ts">
import MutHeader from '@/components/header.vue';
import MutMatches from '@/components/matches.vue';

import slug from 'slug';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { orderByProperty } from '@/store/helpers/order-by-property';

const currentTournament = namespace('currentTournament');
const groupstage = namespace('groupstage');

@Component({
  components: {
    MutHeader,
    MutMatches,
  },
})
export default class League extends Vue {
  @currentTournament.Getter('slug') public slug!: any;
  @currentTournament.Getter('teams') public teams!: any[];
  @currentTournament.Getter('numberOfProceedingPlayers') public numberOfProceedingPlayers!: any;
  @groupstage.Getter('groups') public groups!: any[];
  @groupstage.Getter('proceedingTeams') public procedingTeams!: any;

  public view: string = 'matches';

  public beforeMount() {
    this.$store.dispatch('groupstage/updateTables');
  }

  public get done() {
    const allGroupsCompleted = this.groups.every((match) => {
      return match.completed === true;
    });

    return allGroupsCompleted;
  }


  public generateId(group: any) {
    return `${slug(group.toLowerCase())}`;
  }

  public scrollToGroup(group: any) {
    const element: any = this.$refs[this.generateId(group)];
    const shortCutElement: any = this.$refs['shortcuts'];
    const top = element[0].offsetTop - (shortCutElement.offsetTop + 100); // scroll to 100px below the shortcut ;)
    window.scrollTo(0, top);
  }

  public matchUpdate(index: any, event: any) {
    this.$store.dispatch('groupstage/updateMatch', {
      groupIndex: index,
      match: event.match,
    });
  }

  public allMatchesPlayed(index: any) {
    this.$store.dispatch('groupstage/setGroupCompleted', {
      groupIndex: index,
    });
  }

  public endGroupstage() {
    const qualifiedPositions = Math.floor(this.numberOfProceedingPlayers / this.groups.length);

    const teamsToProceed: any[] = [];
    const teamsToExit: any[] = [];

    this.groups.forEach((group) => {
      const table = this.getTableOrder(group);

      table.forEach((team: any, index: any) => {
        if (index < qualifiedPositions) {
          teamsToProceed.push(team.id);
        } else {
          teamsToExit.push(team);
        }
      });
    });


    if (this.numberOfProceedingPlayers !== teamsToProceed.length) {
      const extraTeamsToProceed =
        this.getRemainingTeams(teamsToExit, (this.numberOfProceedingPlayers - teamsToProceed.length));
      teamsToProceed.push(...extraTeamsToProceed);
    }

    this.$store.dispatch('groupstage/complete', {
      teamIds: teamsToProceed,
    });

    this.$store.dispatch('knockout/generate', {
      teams: this.procedingTeams,
    });

    this.$router.push(`/knockout/${this.slug}`);
  }

  public getRemainingTeams(teamsToExit: any, numberOfTeamsToSelect: any) {
    // - get all teams except already selected
    const sorted = teamsToExit
      .sort(orderByProperty('pointsAverage', 'scored', 'difference', 'wins', 'draws'))
      .reverse();
    const extraTeamsToProceed = [];

    for (let i = 0; i < numberOfTeamsToSelect; i++) {
      extraTeamsToProceed.push(sorted[i].id);
    }

    return extraTeamsToProceed;
  }

  public getTableOrder(group: any) {
    const data = this.results(group);
    return data.sort(orderByProperty('points', 'difference', 'scored')).reverse();
  }

  public results(group: any) {
    return group.table.map((t: any) => {
      return {
        id: t.id,
        team: `${t.club} (${t.player})`,
        played: t.stats.played,
        wins: t.stats.won,
        draws: t.stats.draw,
        losses: t.stats.lost,
        scored: t.stats.goalsFor,
        against: t.stats.goalsAgainst,
        difference: t.stats.goalDifference,
        points: t.stats.points,
        pointsAverage: t.stats.points === 0 ? 0 : (t.stats.points / t.stats.played),
      };
    });
  }

  public toggleView(state: any) {
    this.view = state;
  }
}
</script>

<style lang="scss" scoped>
.matches {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
}

.group__title {
  margin: 70px 0 35px;
  text-transform: uppercase;
}

.group__title::before {
  content: "// ";
}

.groupstage__shortcuts {
  background: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: fixed;
  top: 84px; /* header + statusbar; */
  z-index: 9; /* just below the header */
}

.groupstage__shortcuts span {
  color: var(--bright-sky-blue);
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
}

.groupstage__shortcuts span::after {
  content: "-";
  padding-left: 20px;
}

.groupstage__shortcuts span:last-child::after {
  content: none;
}
</style>
