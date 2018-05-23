<template lang="pug">
  v-app
    v-toolbar(color='primary white--text')
      v-toolbar-title(@click="goToRoute('/')") Mutambo
    v-content
      v-container(fluid fill-height)
        v-layout(justify-center align-center)
          v-flex(text-xs-center)
            router-view

    v-footer(color='accent')
      mut-logo

</template>

<script>
import { routes } from './config';

export default {
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    }
  },
};
</script>
