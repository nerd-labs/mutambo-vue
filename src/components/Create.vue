<template>
  <div>
   <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
         <v-text-field
          label="Name"
          v-model="name"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs6 offset-xs3>
         <v-text-field
          label="Number of players"
          v-model="totalPlayers"
          type="number"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs6 offset-xs3>
           <v-btn-toggle v-model="type">
              <v-btn flat value="knockout">
                Knockout
              </v-btn>
              <v-btn flat value="league">
                League
              </v-btn>
              <v-btn flat value="groupstage-knockout">
                Groupstage & Knockout
              </v-btn>
            </v-btn-toggle>
      </v-flex>
      <v-flex xs6 offset-xs3>
           <v-btn color="primary" @click="submit()">Submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

 <script>
export default {
  data: () => ({
    name: "",
    totalPlayers: undefined,
    type: "knockout"
  }),
  methods: {
    submit() {
      alert("see console");
      console.table({
        name: this.name,
        totalPlayers: this.totalPlayers,
        type: this.type
      });
    }
  }
};
</script>

<style lang="scss">

</style>
