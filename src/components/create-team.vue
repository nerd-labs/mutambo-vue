<template lang="pug">
  div
      v-card(v-if="teamType==='normal'")
        v-container
          v-layout(row wrap)
            v-flex(xs12)
              v-text-field(label='Name' v-model='name')
            v-flex(xs12)
              v-text-field(label='Team' v-model='team')

      v-container(fluid grid-list-md v-if="teamType==='random'")
        v-layout(row wrap)
          v-flex(xs12 md6)
            v-card
              v-container
                v-text-field(label='Name' v-model='name')
          v-flex(xs12 md6)
            v-card
              v-container
                v-text-field(label='Team' v-model='team')

</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "normal",
      validator: value => {
        const allowedTypes = ["normal", "random"];
        return allowedTypes.indexOf(value) > -1;
      }
    }
  },

  data: () => ({
    name: "",
    team: ""
  }),

  computed: {
    teamType: function() {
      return this.type;
    }
  }
};
</script>

<style lang="scss">

</style>
