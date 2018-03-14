<template lang="pug">
  div

    v-container(grid-list-md)
        v-layout(row wrap justify-space-between)
          v-flex(md8 offset-md2 v-if="draw")
            .matches
              .match(v-for="(team, index) in teams")
                .math__side.match__side--home
                  .match__team
                      | {{ getRandomClub() }}
                      .match__player {{ getRandomPlayer() }}

        v-flex(mt-3 v-if="!draw")
          v-btn(color="primary" @click="startDraw") Draw
</template>

 <script>
export default {
  data: () => ({
    draw: false
  }),
  methods: {
    getRandomPlayer() {
      return this.players.splice(
        (this.players.length * Math.random()) | 0,
        1
      )[0];
    },

    getRandomClub() {
      return this.clubs.splice((this.clubs.length * Math.random()) | 0, 1)[0];
    },

    startDraw() {
      this.draw = true;
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },

    teams() {
      return this.$store.getters.teams(this.slug);
    },

    clubs() {
      return this.teams.map(t => t.club);
    },

    players() {
      return this.teams.map(t => t.player);
    }
  }
};
</script>

<style lang="scss">
.matches {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
}

.match {
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  height: 80px;
  padding: 20px;
}

.math__side {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.match__team {
  font-size: 20px;
  font-weight: 300;
}

.match__player {
  font-size: 12px;
  line-height: 20px;
  opacity: 0.5;
}
</style>
