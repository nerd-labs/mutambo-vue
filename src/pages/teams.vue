<template lang="pug">
    div
      v-container(fluid grid-list-md)
        v-layout(row wrap)
          v-flex(d-flex xs12 sm6 md4 lg3 xl2 v-for="n in numberOfPlayers")
            mut-create-team
</template>

<script>
export default {
  computed: {
    numberOfPlayers() {
      return parseInt(this.$store.state.tournaments.find(
        tournament => tournament.name === "Euricom"
      ).numberOfPlayers);
    }
  }
};
</script>
