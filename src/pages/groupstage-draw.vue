<template lang="pug">
  div
    v-container(grid-list-md)
      h2.display-2.accent--text.mb-5 {{ name }}

      .groups
        .group(v-for="group in animatedGroups")
          h3 {{group.name}}

          div(v-for="team in group.teams")
            | {{team.club}} ({{team.player}})

      v-btn(color="primary" @click="startGroupstage") Start groupstage


</template>

<script>
import { mapGetters } from "vuex";
import { shuffle } from '../helpers/shuffle';
import berger from '../helpers/berger';

export default {
  mounted () {
    if (!this.groups.length) {
      this.generateGroups();
    }

    this.startDraw();
  },

  data: () => ({
    animatedGroups: []
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

    startDraw(currentGroupIndex = 0, currentTeamIndex = 0) {
      const currentGroup = this.groups[currentGroupIndex];

      if (!this.animatedGroups.length) {
        for(let i = 0; i < this.groups.length; i++) {
          this.animatedGroups.push({
            name: this.groups[i].name,
            teams: []
          });
        }
      }

      this.animatedGroups[currentGroupIndex].teams.push(this.groups[currentGroupIndex].teams[currentTeamIndex]);

      currentTeamIndex++;

      if (currentTeamIndex >= currentGroup.teams.length) {
        currentTeamIndex = 0;
        currentGroupIndex++;
      }

      if (currentGroupIndex >= this.groups.length) {
        return;
      }

      setTimeout(() => {
        this.startDraw(currentGroupIndex, currentTeamIndex);
      }, 1000);
    },

    startGroupstage() {
      this.$router.push(`/${this.type}/${this.slug}`);
    }
  }

};
</script>

<style scoped>
.groups {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
}

.group {
  margin-bottom: 20px;
}
</style>
