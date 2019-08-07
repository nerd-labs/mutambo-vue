<template lang="pug">
  .u-box.create-team
    .form__group
      label Player
      input(type='text' v-model='team.player' @input="submit")
    .form__group
      label Club
      input(type='text' v-model="team.club" @input="submit")
    div(hidden)
      span(v-model='team.id')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IdGenerator } from '@/store/helpers/id-generator';

@Component
export default class MutCreateTeam extends Vue {
  @Prop({ type: Object }) public team!: any;

  public submit() {
    if (!this.team.club || !this.team.player) {
      return;
    }

    if (!this.team.id) {
      this.team.id = IdGenerator.id();
    }

    this.emit();
  }

  public emit() {
    this.$emit('addTeam', this.team);
  }
}
</script>

<style scoped>
.create-team {
  margin: 10px;
}

.create-team .form__group {
  margin-top: 30px;
}

.create-team .form__group:first-child {
  margin-top: 0;
}
</style>
