<template lang="pug">
  div
    v-card
      v-card-title(primary-title)
        v-container(fluid grid-list-md)
          v-layout(row wrap)
            v-flex(d-flex xs12)
               v-text-field(label='Name' v-model='name')
            v-flex(d-flex xs12)
              v-text-field(label='Team' v-model='team')


</template>

<script>
export default {
  data: () => ({
    name: "",
    team: ""
  }),
};
</script>
