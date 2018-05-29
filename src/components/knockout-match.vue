<template lang="pug">
  .knockout-match
    .knockout-match__club
      template(v-if="home")
        span.knockout-match__club-name {{ home.club }}
        span.knockout-match__score
          | {{ home.score }}
          span.knockout-match__penalty-score(v-if="home.penaltyScore") {{ home.penaltyScore }}
    .knockout-match__club
      template(v-if="away")
        span.knockout-match__club-name {{ away.club }}
        span.knockout-match__score
          | {{ away.score }}
          span.knockout-match__penalty-score(v-if="away.penaltyScore") {{ away.penaltyScore }}
</template>

<script>
export default {
  props: {
    home: {
      required: true
    },
    away: {
      required: true
    }
  }
};
</script>

<style scoped>
.knockout-match__club-name {
  text-align: left;

  @media screen and (min-width: 1640px) {
    max-width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.knockout-match__club {
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  height: 30px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;


  .knockout-match__score {
    font-size: 13px;
    color: lightgrey;
    margin-left: 5px;
  }
}


.knockout-match__score {
  margin-left: 5px;
}

.knockout-match__penalty-score {
  font-size: 13px;
  color: lightgrey;
  margin-left: 5px;
}
</style>
