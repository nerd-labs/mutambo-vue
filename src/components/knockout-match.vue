<template lang="pug">
  .knockout-match
    .knockout-match__club
      template(v-if="home")
        span.knockout-match__club-name
          | {{ home.club }}
          span {{ home.player }}
        span.knockout-match__score(v-if="home.club")
          | {{ home.score }}
          span.knockout-match__penalty-score(v-if="home.penaltyScore") {{ home.penaltyScore }}
    .knockout-match__club
      template(v-if="away")
        span.knockout-match__club-name
          | {{ away.club }}
          span {{ away.player }}
        span.knockout-match__score(v-if="away.club")
            | {{ away.score }}
            span.knockout-match__penalty-score(v-if="away.penaltyScore") {{ away.penaltyScore }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MutKnockoutMatch extends Vue {
  @Prop({ type: Object, required: true }) public home!: any;
  @Prop({ type: Object, required: true }) public away!: any;
}
</script>

<style lang="scss" scoped>
.knockout-match__club-name {
  align-items: center;
  display: flex;
  text-align: left;
  width: 100%;

  @media screen and (min-width: 1640px) {
    max-width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.knockout-match__club-name span {
  color: var(--bright-sky-blue);
  font-size: 10px;
  margin-left: 10px;
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
