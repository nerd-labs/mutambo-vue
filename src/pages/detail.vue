<template lang="pug">
  div
    v-container(grid-list-md)
      h2.display-2.accent--text.mb-5 {{ name }}

      v-form(v-model="valid" lazy-validation ref="form")
        v-layout(row wrap)
          v-flex(xs6 offset-xs3)
            v-text-field(label="Number of plays against each team" v-model="numberOfPlays" required :rules="numberOfPlaysRules" type="number")

          //- v-flex(xs6 offset-xs3 v-if="type === 'groupstage'")
          //-   v-text-field(label="Number of plays against each team" v-model="numberOfPlays" required :rules="numberOfPlaysRules" type="number")

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
    ]
  }),

  computed: {
    ...mapGetters({
      slug: "currentTournament/slug",
      name: "currentTournament/name",
      type: "currentTournament/type",
    })
  },

  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.$store.dispatch("currentTournament/updateDetails", {
        numberOfPlays: parseInt(this.numberOfPlays)
      });

      this.$router.push(`/teams/${this.slug}`);
    }
  }
};
</script>
