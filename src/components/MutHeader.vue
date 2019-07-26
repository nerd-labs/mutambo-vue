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

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MutHeader extends Vue {
  @Prop({ type: String, required: false }) public back!: string;

  get name() {
    return this.$store.state.currentTournament.name;
  }

  public goToHome() {
    this.$router.push('/');
  }

  public goBack() {
    const route = this.back === '/' ? '' : this.back;
    this.$router.push(`/${route}`);
  }
}
</script>

<style lang="scss" scoped>
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
  content: "// ";
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
