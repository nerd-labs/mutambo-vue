<template lang="pug">
  .page.create
    mut-header(:back="'/'")

    .page__content
      h3 🎉 Create new tournament  🎉
      .form__group
        label Tournament name
        input(type='text' v-model="name" )
      .form__group
        label Tournament type
        .button-group
          .button-group-item(value="league" @click="setType('league')" :class="{ 'button-group-item--active': type === 'league'}")
            | League
          .button-group-item(value="knockout" @click="setType('knockout')" :class="{ 'button-group-item--active': type === 'knockout'}")
            | Knockout
          .button-group-item(value="groupstage" @click="setType('groupstage')" :class="{ 'button-group-item--active': type === 'groupstage'}")
            | Groupstage & Knockout
      a.button.button--tertiary(v-if="_id" @click="submit()")
        | update
      a.button.button--tertiary(v-else @click="submit()")
        | create
</template>

<script lang="ts">
import MutHeader from '@/components/header.vue';

import slug from 'slug';
import { Component, Vue } from 'vue-property-decorator';
import { IdGenerator } from '../store/helpers/id-generator';
import { Routes } from '../router';
import { namespace } from 'vuex-class';

const currentTournament = namespace('currentTournament');

@Component({
  components: {
    MutHeader,
  },
})
export default class Create extends Vue {
  @currentTournament.Getter('name') private _name!: string;
  @currentTournament.Getter('type') private _type!: string;
  @currentTournament.Getter('id') private _id!: string;

  public name = '';
  public type = 'knockout';
  public id = IdGenerator.id();


  public created() {
    if (this._id) {
      this.id = this._id;
      this.name = this._name;
      this.type = this._type;
    }
  }

  public submit() {
    const slugged = slug(this.name.toLowerCase());

    const tournament: any = {
      id: this.id,
      name: this.name,
      type: this.type,
    };

    tournament.slug = `${slugged}-${IdGenerator.r4c}`;

    this.$store.commit('addTournament', tournament);
    this.$router.push(`${Routes.Detail}/${tournament.slug}`);
  }

  public setType(type: any) {
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
.button-group {
  display: flex;
  flex-direction: row;
  font-size: 16px;
  justify-content: center;
  text-align: center;
}

.button-group-item {
  align-items: center;
  border: 1px solid var(--bright-sky-blue);
  border-left: 0;
  box-sizing: border-box;
  cursor: pointer;
  color: var(--bright-sky-blue);
  display: flex;
  flex-grow: 1;
  height: 50px;
  justify-content: center;
  padding: 15px 30px;
}

.button-group-item:first-child {
  border-left: 1px solid var(--bright-sky-blue);
  border-radius: 8px 0 0 8px;
}

.button-group-item:last-child {
  border-radius: 0 8px 8px 0;
}

.button-group-item--active {
  background-color: var(--bright-sky-blue);
  color: var(--white);
}
</style>
