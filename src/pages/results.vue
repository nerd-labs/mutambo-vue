<template lang="pug">
    div
      v-container(grid-list-md)
        h2.display-2.accent--text.mb-5 {{ tournamentName }} results

        v-flex(md8 offset-md2)
          v-data-table.elevation-1(:headers='headers' :items='results' hide-actions)
            template(slot='items', slot-scope='props')
              td.text-xs-left {{ props.item.team }}
              td.text-xs-left {{ props.item.played }}
              td.text-xs-left {{ props.item.wins }}
              td.text-xs-left {{ props.item.draws }}
              td.text-xs-left {{ props.item.losses }}
              td.text-xs-left {{ props.item.scored }}
              td.text-xs-left {{ props.item.against }}
              td.text-xs-left {{ props.item.difference }}
              td.text-xs-left {{ props.item.points }}

</template>

<script>
import { matchStates, routes } from "../config";

export default {
  data: () => ({
    headers: [
      { text: "Team", value: "team", sortable: false, align: 'left', class: 'caption' },
      { text: "Played", value: "played", sortable: false, align: 'left', class: 'caption' },
      { text: "Wins", value: "wins", sortable: false, align: 'left', class: 'caption' },
      { text: "Draws", value: "draws", sortable: false, align: 'left', class: 'caption' },
      { text: "Losses", value: "losses", sortable: false, align: 'left', class: 'caption' },
      { text: "Scored", value: "scored", sortable: false, align: 'left', class: 'caption' },
      { text: "Against", value: "against", sortable: false, align: 'left', class: 'caption' },
      { text: "Difference", value: "difference", sortable: false, align: 'left', class: 'caption' },
      { text: "Points", value: "points", sortable: false, align: 'left', class: 'caption' }
    ]
  }),
  computed: {
    tournamentName() {
      return this.$store.getters.tournamentName(this.$route.params.slug);
    },
    teams() {
      return this.$store.getters.teams(this.$route.params.slug);
    },

    results() {
      return this.teams.map(t => {
        return {
          team: `${t.club} (${t.player})`,
          played: Math.floor(Math.random() * 4) + 1,
          wins: Math.floor(Math.random() * 4) + 1,
          draws: Math.floor(Math.random() * 4) + 1,
          losses: Math.floor(Math.random() * 4) + 1,
          scored: Math.floor(Math.random() * 30) + 1,
          against: Math.floor(Math.random() * 20) + 1,
          difference: Math.floor(Math.random() * 20) + 1,
          points: (Math.floor(Math.random() * 4) + 1) * (Math.floor(Math.random() * 3) + 1),
        };
      });
    }
  }
};
</script>
