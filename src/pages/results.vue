<template lang="pug">
    div
      v-container(grid-list-md)
        h2.display-2.accent--text.mb-5 {{ name }} results

        v-flex(xs12 xl8 offset-xl2)
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
        sortable: false
      },
      {
        text: "Played",
        value: "played",
        sortable: false
      },
      {
        text: "Wins",
        value: "wins",
        sortable: false
      },
      {
        text: "Draws",
        value: "draws",
        sortable: false
      },
      {
        text: "Losses",
        value: "losses",
        sortable: false
      },
      {
        text: "Scored",
        value: "scored",
        sortable: false
      },
      {
        text: "Against",
        value: "against",
        sortable: false
      },
      {
        text: "Difference",
        value: "difference",
        sortable: false
      },
      {
        text: "Points",
        value: "points",
        sortable: false
      }
    ]
  }),
  computed: {

    tournament() {
      return this.$store.getters.tournament(this.$route.params.slug);
    },

    name() {
      return this.tournament.name();
    },

    teams() {
      return this.tournament.teams();
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
