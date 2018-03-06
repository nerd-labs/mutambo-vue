<template lang="pug">
  div
    v-btn(color="primary" @click="goToRoute('create')") Create tournament

    br
    br

    div(v-if="existingTournaments.length")
      v-list
        template(v-for="(tournament, index) in existingTournaments")
          .pl-3.pr-3
            v-divider(v-if="index !== 0")
          v-subheader {{ tournament.name }}

</template>

<script>
export default {
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    }
  },

  computed: {
    existingTournaments () {
      return this.$store.state.tournaments;
    }
  }
};
</script>
