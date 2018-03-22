<template lang="pug">
    div
      v-container(grid-list-md)
        h2.display-2.accent--text.mb-5 {{ tournamentName }} results

        v-flex(md8 offset-md2)
          v-data-table.elevation-1(:headers='headers' :items='sortedResults' hide-actions)
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
      {
        text: "Team",
        value: "team",
        sortable: false,
        align: "left",
        class: "caption"
      },
      {
        text: "Played",
        value: "played",
        sortable: false,
        align: "left",
        class: "caption"
      },
      {
        text: "Wins",
        value: "wins",
        sortable: false,
        align: "left",
        class: "caption"
      },
      {
        text: "Draws",
        value: "draws",
        sortable: false,
        align: "left",
        class: "caption"
      },
      {
        text: "Losses",
        value: "losses",
        sortable: false,
        align: "left",
        class: "caption"
      },
      {
        text: "Scored",
        value: "scored",
        sortable: false,
        align: "left",
        class: "caption"
      },
      {
        text: "Against",
        value: "against",
        sortable: false,
        align: "left",
        class: "caption"
      },
      {
        text: "Difference",
        value: "difference",
        sortable: false,
        align: "left",
        class: "caption"
      },
      {
        text: "Points",
        value: "points",
        sortable: false,
        align: "left",
        class: "caption"
      }
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
          played: t.stats.played,
          wins: t.stats.wins,
          draws: t.stats.draws,
          losses: t.stats.loses,
          scored: t.stats.scored,
          against: t.stats.against,
          difference: t.stats.scored - t.stats.against,
          points: t.stats.points
        };
      });
    },

    sortedResults() {
      return this.results.sort(this.orderByProperty('points', 'difference', 'scored')).reverse();
    }
  },

  methods: {
    orderByProperty(prop) {
      const args = Array.prototype.slice.call(arguments, 1);
      return (a, b) => {
        const equality = a[prop] - b[prop];
        if (equality === 0 && arguments.length > 1) {
          return this.orderByProperty.apply(null, args)(a, b);
        }
        return equality;
      };
    }
  }
};
</script>
