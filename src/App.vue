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

  watch:{
    $route (to){
      const nextRoute = to.fullPath.split('/')[1];

      const activePath = Object.keys(routes).find(p => routes[p].path === nextRoute);
      const routeConfig = routes[activePath];

      if (routeConfig.save) {
        this.$store.commit('setProgress', {
          slug: this.$route.params.slug,
          page: routeConfig.path
        });
      }
    }
}
};
</script>
