<template lang="pug">
  div
    v-container(grid-list-md)
      h2.display-2.accent--text.mb-5 {{ name }}

      v-form(v-model="valid" lazy-validation ref="form")
        v-layout(row wrap)
          v-flex(xs6 offset-xs3)
            v-text-field(label="Number of plays against each team" v-model="numberOfPlays" required :rules="numberOfPlaysRules" type="number")

          v-flex(xs6 offset-xs3 v-if="type === 'groupstage'")
            v-select(:items="numberOfProceedingPlayersOptions" v-model="numberOfProceedingPlayers" label="Number of proceeding players" single-line)

          v-flex(xs6 offset-xs3)
              v-btn(color="primary" @click="submit" :disabled="!valid") Submit
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    valid: true,
    numberOfPlays: 1,
    numberOfPlaysRules: [
      v => !!v || "Number of plays is required",
      v => v >= 1 || "There should be at least 1 play"
    ],

    numberOfProceedingPlayers: undefined,
    numberOfProceedingPlayersOptions: [2, 4, 8, 16, 32],
  }),

  computed: {
    ...mapGetters({
      slug: "currentTournament/slug",
      name: "currentTournament/name",
      totalTeams: "currentTournament/totalTeams",
      type: "currentTournament/type",
    })
  },

  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.$store.dispatch("currentTournament/updateDetails", {
        numberOfPlays: parseInt(this.numberOfPlays),
        numberOfProceedingPlayers: this.numberOfProceedingPlayers,
      });

      this.$router.push(`/teams/${this.slug}`);
    }
  }
};
</script>
