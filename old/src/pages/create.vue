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
      a.button.button--tertiary(v-if="_id" @click="submit")
        | update
      a.button.button--tertiary(v-else @click="submit")
        | create
</template>

<script>

import { mapGetters } from "vuex";

import slug from "slug";
import idGenerator from "../services/id-generator";

export default {
  data: () => ({
    name: "",
    type: "knockout",
    id: idGenerator.id()
  }),

  computed: {
    ...mapGetters({
      _id: "currentTournament/id",
      _name: "currentTournament/name",
      _type: "currentTournament/type",
    })
  },

  created() {
    if (this._id) {
      this.id = this._id;
      this.name = this._name;
      this.type = this._type;
    }
  },

  methods: {
    submit() {
      const slugged = slug(this.name.toLowerCase());

      const tournament = {
        id: this.id,
        name: this.name,
        type: this.type
      };

      tournament.slug = `${slugged}-${idGenerator.random4chars}`

      this.$store.commit("addTournament", tournament);
      this.$router.push(`/detail/${tournament.slug}`);
    },

    setType(type) {
      this.type = type;
    }
  }

};
</script>

<style scoped>
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
