<template lang="pug">
  .page.create
    mut-header

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
      a.button.button--tertiary( @click="submit")
        | create


</template>

 <script>

import slug from "slug";
import idGenerator from "../services/id-generator";

export default {
  data: () => ({
    name: "",
    type: "knockout"
  }),
  methods: {
    goToHome() {
      this.$router.push('/');
    },

    submit() {
      const slugged = slug(this.name.toLowerCase());

      const tournament = {
        id: idGenerator.id(),
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
