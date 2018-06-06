<template lang="pug">
  #app
    .statusbar.u-background--gradient
    router-view
</template>

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
  }

  .statusbar::before {
    background-color: rgba(255, 255, 255, .75);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
