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
          .tournament__delete(v-if="deleteMode" @click="deleteTournament(tournament)")
            i.material-icons delete_forever

      .tournaments__delete-button(v-if="tournaments.length" @click="toggleDelete()")
        span(v-if="!deleteMode") delete tournaments
        span(v-else) done
</template>

<script lang="ts">
import { Getter } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import { Routes } from '../router';

@Component
export default class Home extends Vue {
  @Getter('tournaments') public tournaments!: any[];

  public deleteMode = false;

  public beforeMount() {
    this.$store.dispatch('currentTournament/reset');
  }

  public goToCreate() {
    this.$router.push(Routes.Create);
  }

  public goToRoute(id: any) {
    if (this.deleteMode) { return; }

    const tournament = this.$store.getters.tournamentById(id);
    this.$router.push(tournament.page);
  }

  public tournamentIcon(tournament: any) {
    switch (tournament.type) {
      case 'league':
      case 'knockout':
        return tournament[tournament.type].done ? '🏆' : '🎮';
      case 'groupstage':
        return tournament[tournament.type].done && tournament.knockout.done
          ? '🏆'
          : '🎮';
    }
  }

  public toggleDelete() {
    this.deleteMode = !this.deleteMode;
  }

  public deleteTournament(tournament: any) {
    const result = confirm(
      `Are you sure you want to delete "${tournament.name}"`,
    );
    if (result) { this.$store.dispatch('deleteTournament', tournament); }
  }
}
</script>

<style lang="scss" scoped>
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

.tournament__delete {
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.tournament__delete i {
  color: white;
  font-size: 60px;
}

.tournaments__delete-button {
  margin-top: 50px;
}

.tournaments__delete-button span {
  color: var(--white);
  cursor: pointer;
  text-decoration: underline;
}
</style>
