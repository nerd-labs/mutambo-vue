<template lang="pug">
  #app
    .statusbar.u-background--gradient
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue { }
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}

.statusbar {
  -webkit-app-region: drag;
  display: block;
  height: 22px;
  position: fixed;
  width: 100%;
  z-index: 10;
}

.statusbar::before {
  background-color: rgba(255, 255, 255, 0.75);
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.statusbar + .page {
  height: calc(100% - 22px) !important;
  position: relative;
  top: 22px; /* same height as statusbar */
}
</style>
