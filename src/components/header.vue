<template lang="pug">
  .page__header.u-background--gradient
    .page__header-left
      h1.page__title(@click="goToHome()") Mutambo
      h2.page__subtitle(v-if="name") {{ name }}

    .page__header-right
      slot

    .page__header-back(v-if="back" @click="goBack()")
      i.material-icons chevron_left
      | back
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  props: {
    back: {
      required: false,
      type: String,
    }
  },

  computed: {
    ...mapGetters({
      name: 'currentTournament/name'
    }),
  },

  methods: {
    goToHome() {
      this.$router.push('/');
    },

    goBack() {
      console.log(this.back);
      if (this.back) {
        const route = this.back === '/' ? '' : this.back;
        this.$router.push(`/${route}`);
      } else {
        history.back();
      }
    }
  }
};
</script>

<style scoped>
.page__header {
  box-sizing: border-box;
  display: flex;
  grid-area: header;
  height: 65px;
  padding: 8px;
  position: fixed;
  width: 100%;
  z-index: 10;
}

.page__header-left {
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
}

.page__header-right {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-grow: 0;
}

.page__header-right .button {
  margin: 0;
}

.page__title {
  cursor: pointer;
}

.page__subtitle {
  line-height: 40px;
  margin-left: 15px;
}

.page__subtitle::before {
    content: '// ';
}

.page__header-back {
  align-items: center;
  bottom: -35px;
  cursor: pointer;
  display: flex;
  position: absolute;
}

.page__header-back i {
  color: var(--bright-sky-blue);
}
</style>
