import { matchStates } from '@/store/config';
import { getTable } from '@/store/helpers/table';
import { ActionTree } from 'vuex';

export const actions: ActionTree<any, any> = {
  updateTable({ commit, getters }, { groupIndex }) {
    const tournament = getters.tournament;
    const groups = getters.groups;
    const currentGroup = getters.groups[groupIndex];

    const completedMatches = currentGroup.matches.filter((match: any) => {
      return match.state === matchStates.DONE;
    });

    const table = getTable(currentGroup.teams, completedMatches);

    groups[groupIndex].table = table;

    commit('setGroups', { tournament, groups });
  },

  setGroupCompleted({ commit, getters }, { groupIndex }) {
    const tournament = getters.tournament;
    const groups = getters.groups;

    groups[groupIndex].completed = true;

    commit('setGroups', { tournament, groups });
  },

  updateTables({ commit, getters }) {
    const tournament = getters.tournament;
    const groups = getters.groups;

    groups.forEach((group: any, index: any) => {
      const completedMatches = group.matches.filter((match: any) => {
        return match.state === matchStates.DONE;
      });

      const table = getTable(group.teams, completedMatches);

      groups[index].table = table;
    });

    commit('setGroups', { tournament, groups });
  },

  complete({ commit, getters }, { teamIds }) {
    const tournament = getters.tournament;
    const teams = tournament.teams;
    const proceedingTeams: any = [];

    teams.forEach((team: any) => {
      const f = teamIds.find((t: any) => t === team.id);
      if (f) { proceedingTeams.push(team); }
    });

    commit('complete', { tournament, proceedingTeams });
  },

  updateMatchScore({ commit, getters }, { groupIndex, match }) {
    const tournament = getters.tournament;
    const matchIndex = tournament.groupstage.groups[groupIndex].matches.findIndex((m: any) => m.id === match.id);

    commit('updateMatchScore', { tournament, matchIndex, groupIndex, match });
  },

  updateMatch({ dispatch }, { groupIndex, match }) {
    dispatch('updateMatchScore', { groupIndex, match });

    dispatch('updateTable', { groupIndex });
  },

  setGroups({ commit, getters }, { groups }) {
    const tournament = getters.tournament;

    commit('setGroups', { tournament, groups });
  },
};
