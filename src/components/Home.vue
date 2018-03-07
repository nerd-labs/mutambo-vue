<template lang="pug">
  div
    v-btn(color="primary" @click="goToRoute('create')") Create tournament
</template>

<script>
export default {
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>
