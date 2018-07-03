<template lang="pug">
  .page.home.u-background--gradient.u-height--full
    .page__content.page__content--center
      h1 Mutambo
      .button(color="primary" @click="goToCreate()") Create tournament

      .tournament-list(v-if="tournaments.length")
        .tournament.u-box(v-for="(tournament, index) in tournaments" @click="goToRoute(tournament.id)")
          h3.tournament__name {{ tournament.name }}
          .tournament__info
            .tournament__type
              span type:
              | {{ tournament.type }}
            .tournament__players
              span players:
              | {{ tournament.teams ? tournament.teams.length : '0' }}
          .tournament__icon {{ tournamentIcon(tournament) }}
</template>

<script>

import { routes } from "../config";
import { mapGetters } from "vuex";

export default {
  beforeMount() {
    this.$store.dispatch("currentTournament/reset");
  },

  methods: {
    goToCreate() {
      this.$router.push(routes.CREATE.path);
    },

    goToRoute(id) {
      const tournament = this.$store.getters.tournamentById(id);
      this.$router.push(tournament.page);
    },

    tournamentIcon(tournament) {
      switch(tournament.type) {
        case 'league':
        case 'knockout':
          return tournament[tournament.type].done ? '🏆' : '🎮'
        case 'groupstage':
          return tournament[tournament.type].done && tournament['knockout'].done ? '🏆' : '🎮'
      }
    }
  },

  computed: {
    ...mapGetters({
      tournaments: "tournaments"
    })
  }
};
</script>

<style scoped>
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.page__content {
  flex-wrap: nowrap;
  overflow-y: scroll;
}

.tournament-list {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1410px;
}

.tournament {
  cursor: pointer;
  position: relative;
  margin: 10px;
}

.tournament__name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 14px;
  max-width: 80%;
}

.tournament__info {
  align-items: center;
  color: var(--warm-grey);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 70%;
}

.tournament__info span {
  font-weight: var(--font-weight-bold);
  margin-right: 5px;
}

.tournament__icon {
  font-size: 40px;
  height: 50px;
  position: absolute;
  right: 25px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
}
</style>
