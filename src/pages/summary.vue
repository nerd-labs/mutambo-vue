<template lang="pug">
  div

    v-container(grid-list-md)
        v-layout(row wrap justify-space-between)
          v-flex(md8 offset-md2)
            v-card
              v-card-title.accent.white--text Summary
              v-card-text
                v-list
                  v-list-tile
                    v-list-tile-content
                      v-list-tile-title Your tournament will contain {{ totalTeams }} players.
                  v-list-tile
                    v-list-tile-content
                      v-list-tile-title Every player will play with 1 team.
                  v-list-tile
                    v-list-tile-content
                      v-list-tile-title All teams will play {{ numberOfPlays }} {{numberOfPlays > 1 ? 'times' : 'time' }} against all other player's teams.
                  v-list-tile
                    v-list-tile-content
                      v-list-tile-title The tournament will consist of {{ totalFixtures }} fixtures.
                  v-list-tile
                    v-list-tile-content
                      v-list-tile-title It will take ± {{ totalMinutes }} minutes to play all fixtures (6 minutes per half).
        v-flex(mt-3)
          v-btn(color="primary" @click="submit") Start tournament
</template>

 <script>
import berger from "../helpers/berger";
import { mapGetters } from 'vuex';

export default {
  computed: {

    ...mapGetters({
      slug: 'currentTournament/slug',
      teams: 'currentTournament/teams',
      totalTeams: 'currentTournament/totalTeams',
      type: 'currentTournament/type',
      numberOfPlays: 'currentTournament/numberOfPlays',
    }),

    totalFixtures() {
      const length = this.totalTeams;
      return length * (length - 1) / 2 * this.numberOfPlays;
    },

    totalMinutes() {
      return this.totalFixtures * 12;
    }
  },

  mounted() {
    this.generateMatches();
  },

  methods: {
    submit() {
      this.$router.push(`/${this.type}/${this.slug}`);
    },

    reverseFixtures(n) {
      return n % 2 === 0;
    },

    generateMatches() {
      const matches = [];

      for (let i = 1; i <= this.numberOfPlays; i++) {
        const teams = JSON.parse(JSON.stringify(this.teams));

        const bergerTable = berger.getTable(
          teams,
          this.reverseFixtures(i)
        );
        matches.push(...bergerTable);
      }

      matches.map(match => {
        match.away.score = 0;
        match.home.score = 0;
      });

      this.$store.commit("addMatches", {
        matches: matches,
        slug: this.slug
      });
    }
  }
};
</script>
