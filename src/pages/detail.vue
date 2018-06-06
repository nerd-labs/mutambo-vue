<template lang="pug">
  .page.detail
    mut-header(:subtitle="name")

    .page__content
      h3 ⚙️ {{ type }} settings ⚙️

      template(v-if="type === 'league'")
        .form__group
          label Total players
          input(type='number' v-model="totalPlayers")
        .form__group
          label Number of plays against each team
          input(type='number' v-model="numberOfPlays")

      template(v-if="type === 'knockout'")
        .form__group
          label Total players
          select(v-model="totalPlayers")
            option(v-for="totalPlayers in knockoutTotalPlayerOptions" :value="totalPlayers") {{ totalPlayers }}

      template(v-if="type === 'groupstage'")
        .form__group
          label Total players
          input(type='number' v-model="totalPlayers")

        .form__group
          label Number of proceeding players
          select(v-model="numberOfProceedingPlayers")
            option(v-for="totalPlayers in numberOfProceedingPlayersOptions" :value="totalPlayers") {{ totalPlayers }}

      a.button.button--tertiary(@click="submit")
        | submit
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    totalPlayers: undefined,
    numberOfPlays: undefined,
    numberOfProceedingPlayers: undefined,
    knockoutTotalPlayerOptions: [2, 4, 8, 16, 32],
  }),

  beforeMount() {
    switch (this.type) {
      case 'knockout':
        this.totalPlayers = this.knockoutTotalPlayerOptions[0];
        break;
      case 'groupstage':
          this.totalPlayers = this.knockoutTotalPlayerOptions[1];
          this.numberOfProceedingPlayers = this.knockoutTotalPlayerOptions[0];
          break;
      case 'league':
          this.totalPlayers = 2;
          this.numberOfPlays = 1;
          break;
    }
  },

  computed: {
    ...mapGetters({
      slug: "currentTournament/slug",
      name: "currentTournament/name",
      totalTeams: "currentTournament/totalTeams",
      type: "currentTournament/type",
    }),

    numberOfProceedingPlayersOptions() {
      if (this.type === 'groupstage') {
        return this.knockoutTotalPlayerOptions.filter(totalPlayers => {
          return totalPlayers <= this.totalPlayers;
        });
      } else {
        return 0;
      }
    },
  },

  methods: {
    submit() {
      // remove from details if undefined :)
      const details = JSON.parse(JSON.stringify({
        numberOfPlays: this.numberOfPlays,
        numberOfProceedingPlayers: this.numberOfProceedingPlayers
      }));

      if (details) {
        this.$store.dispatch("currentTournament/updateDetails", details);
      }

      // create array of total players
      const teams = Array.from({length: this.totalPlayers}).map(() => ({}))
      if (teams) {
        this.$store.dispatch("currentTournament/addEmptyTeams", teams);
      }

      this.$router.push(`/teams/${this.slug}`);
    }
  }
};
</script>
