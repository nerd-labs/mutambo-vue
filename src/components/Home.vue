<template lang="pug">
  div
    v-btn(color="primary" @click="goToRoute('create')") Create tournament

    br
    br
    mut-create-team
    br
    mut-create-team
    br
    br
    mut-create-team(type="random")
    br
    mut-create-team(type="random")
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
