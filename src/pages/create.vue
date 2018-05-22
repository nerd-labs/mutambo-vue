<template lang="pug">
  div
    v-container(grid-list-md)
      v-form(v-model="valid" lazy-validation ref="form")
        v-layout(row wrap)
          v-flex(xs6 offset-xs3)
            v-text-field(label="Name" v-model="name" required :rules="nameRules")

          v-flex(xs6 offset-xs3)
            v-text-field(label="Number of players" v-model="totalPlayers" required :rules="totalPlayerRules" type="number")

          v-flex(xs6 offset-xs3)
              v-btn-toggle(v-model="type")
                  v-btn(color="primary white--text" flat value="knockout") Knockout
                  v-btn(color="primary white--text" flat value="league") League
                  v-btn(color="primary white--text" flat value="groupstage-knockout") Groupstate & Knockout

          v-flex(xs6 offset-xs3)
              v-btn(color="primary" @click="submit" :disabled="!valid") Submit
</template>

 <script>

import slug from "slug";
import idGenerator from "../services/id-generator";

export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [v => !!v || "Name is required"],
    totalPlayers: 2,
    totalPlayerRules: [
      v => !!v || "Number of players is required",
      v => v >= 2 || "There should be at least 2 players"
    ],
    type: "knockout"
  }),
  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return;
      }

      const slugged = slug(this.name.toLowerCase());

      // create array of total players
      // const teams = Array.from({length: this.totalPlayers}).map(() => ({}))
      const teams = []; //TODO: fix with array.from
      for(let i = 0; i < this.totalPlayers; i++) {
        teams.push({});
      }

      const tournament = {
        id: idGenerator.id(),
        name: this.name,
        type: this.type,
        teams
      };

      tournament.slug = `${slugged}-${idGenerator.random4chars}`

      this.$store.commit("addTournament", tournament);
      this.$router.push(`/detail/${tournament.slug}`);
    }
  }
};
</script>
