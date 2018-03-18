<template lang="pug">
  div
    v-container(grid-list-md)
      h2.display-2.accent--text.mb-5 {{ tournamentName }}

      v-form(v-model="valid" lazy-validation ref="form")
        v-layout(row wrap)
          v-flex(xs6 offset-xs3)
            v-text-field(label="Number of plays against each team" v-model="numberOfPlays" required :rules="numberOfPlaysRules" type="number")

          v-flex(xs6 offset-xs3)
              v-btn(color="primary" @click="submit" :disabled="!valid") Submit
</template>

<script>

import { pages } from "../config";

export default {
  data: () => ({
    valid: true,
    numberOfPlays: 1,
    numberOfPlaysRules: [
      v => !!v || "Number of plays is required",
      v => v >= 1 || "There should be at least 1 play"
    ]
  }),

  computed: {
    slug() {
      return this.$route.params.slug;
    },

    tournamentName() {
      return this.$store.getters.tournamentName(this.slug);
    },
  },

  mounted: function() {
    this.$store.commit('setProgress', {
      slug: this.$route.params.slug,
      page: pages.DETAIL
    });
  },

  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.$store.commit("addDetails", {
        slug: this.slug,
        details: {
          numberOfPlays: this.numberOfPlays
        }
      });

      this.$router.push(`/teams/${this.slug}`);
    }
  }
};
</script>
