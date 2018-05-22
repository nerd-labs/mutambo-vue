<template lang="pug">
  div
    v-container(grid-list-lg)
        v-layout(row wrap align-center justify-center)
            v-flex(md2 v-for="(team, index) in newTeams")
              v-jumbotron(:gradient="gradient" dark height="200")
                .math__side.match__side--home.pa-2
                  .match__team
                      | {{ team.club }}
                      .match__player {{ team.player }}

        v-flex(mt-3 v-if="!draw")
          v-btn(color="primary" @click="startDraw") Draw

        v-flex(mt-3 v-if="submitable")
          v-btn(color="primary" @click="submit") Submit

</template>

 <script>

import IdGenerator from "../services/id-generator";
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    draw: false,
    newTeams: [],
    gradient: "to top, #7B1FA2, #E1BEE7",
    submitable: false
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

    startDraw() { // TODO: redraw??
      this.draw = true;
      this.random();
    },

    random(i = 0) {
      setTimeout(() => {
        this.newTeams.push({
          club: this.getRandomClub(),
          player: this.getRandomPlayer(),
          id: IdGenerator.id(),
        });

        if (i < this.teams.length - 1) {
          i++;
          this.random(i);
        } else {
          this.submitable = true;
        }
      }, 500);
    },

    submit() {
      this.$store.dispatch("currentTournament/randomizeTeams", this.newTeams);
      this.$router.push(`/summary/${this.slug}`);
    }
  },
  computed: {

    ...mapGetters({
      slug: 'currentTournament/slug',
      teams: 'currentTournament/teams',
    }),

    clubs() {
      return this.teams.map(t => t.club);
    },

    players() {
      return this.teams.map(t => t.player);
    }
  }
};
</script>
