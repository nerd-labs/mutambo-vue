<template lang="pug">
  .page.teams
    mut-header(:back="'detail/' + slug")

    .page__content
      h3 🙏🏻 Give us some teams plz 🙏🏻

      .create-teams
        mut-create-team(@addTeam="addTeam" :team="team" v-for="team in teams")

      .form__group.form__group--checkbox
        .randomize-checkbox(:class="{ 'randomize-checkbox--checked': randomly }")
          i.material-icons(v-if="randomly") check_box
          i.material-icons(v-if="!randomly") check_box_outline_blank
          input.checkbox(type="checkbox" id="randomize" v-model='randomly')
        label(for="randomize") randomize teams

      a.button.button--tertiary(@click="submit" v-if="allTeamsEntered")
        | continue
</template>

<script lang="ts">
import MutHeader from '@/components/header.vue';
import MutCreateTeam from '@/components/create-team.vue';

import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { namespace } from 'vuex-class';
import { generateDefaultTeams } from '@/store/helpers/migrations';

const currentTournament = namespace('currentTournament');

@Component({
  components: {
    MutHeader,
    MutCreateTeam,
  },
})
export default class Temas extends Vue {
  @currentTournament.Getter('teams') public teams!: any[];
  @currentTournament.Getter('slug') public slug!: string;
  @currentTournament.Getter('type') private type!: string;

  public randomly: boolean = false;

  public beforeMount() {
    // JUST FOR DEVELOPMENT
    // const migratedTeams = generateDefaultTeams(this.teams.length);
    //
    // this.teams.forEach((team, index) => {
    //   team = Object.assign(team, migratedTeams[index]);
    //   this.addTeam(team);
    // });
  }

  get allTeamsEntered() {
    // check if all teams have an id, a club and a player
    return this.teams.filter((team) => team.id && team.club && team.player).length === this.teams.length;
  }

  public addTeam(team: any) {
    this.$store.dispatch('currentTournament/addTeam', team);
  }

  public submit() {
    if (this.randomly) {
      this.$router.push(`/random/${this.slug}`);
    } else {
      if (this.type === 'groupstage') {
        this.$router.push(`/${this.type}/draw/${this.slug}`);
      } else {
        this.$router.push(`/${this.type}/${this.slug}`);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.create-teams {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
}

.randomize-checkbox {
  position: relative;
  line-height: 1px;
  margin-right: 10px;
}

.randomize-checkbox--checked {
  color: var(--light-sea-green);
}

.checkbox {
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
</style>
