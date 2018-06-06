<template lang="pug">
  .table.u-box
    .table__row
      .table__item #
      .table__item Team
      .table__item Played
      .table__item Wins
      .table__item Draws
      .table__item Losses
      .table__item Scored
      .table__item Against
      .table__item Difference
      .table__item Points
    .table__row(v-for="(result, index) in sortedResults")
      .table__item {{ index + 1 }}
      .table__item {{ result.team }}
      .table__item {{ result.played }}
      .table__item {{ result.wins }}
      .table__item {{ result.draws }}
      .table__item {{ result.losses }}
      .table__item {{ result.scored }}
      .table__item {{ result.against }}
      .table__item {{ result.difference }}
      .table__item {{ result.points }}
</template>

<script>
import { orderByProperty } from '../helpers/order-by-property';

export default {
  props: {
    data: {
      required: true
    }
  },

  computed: {
    sortedResults() {
      return this.data.sort(orderByProperty('points', 'difference', 'scored')).reverse();
    }
  }
};
</script>

<style scoped>

.table {
  display: grid;
  font-size: 14px;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
  margin: 20px;
  max-width: 1024px;
}

.table__row {
  align-items: center;
  border-bottom: 1px solid var(--white-two);
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 20px 300px repeat(8, 1fr);
  justify-content: space-around;
  padding: 10px 0;
  text-align: right;
}

.table__row:first-child {
  color: var(--bright-sky-blue);
  padding: 0;
}

.table__row:last-child {
  border: 0;
  padding-bottom: 0;
}

.table__item:nth-child(2) {
  text-align: left;
}


</style>
