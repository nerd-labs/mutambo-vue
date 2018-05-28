<template lang="pug">
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

export default {
  props: {
    data: {
      required: true
    }
  },

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
    sortedResults() {
      return this.data.sort(this.orderByProperty('points', 'difference', 'scored')).reverse();
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
