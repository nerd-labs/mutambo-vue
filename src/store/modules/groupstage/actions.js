import { getTable } from '../../../helpers/table';
import { matchStates } from "../../../config";

export default {
  updateTable({ commit, getters }, { groupIndex }) {
    const tournament = getters.tournament;
    const groups = getters.groups;
    const currentGroup = getters.groups[groupIndex];

    const completedMatches = currentGroup.matches.filter((match) => {
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

    groups.forEach((group, index) => {
      const completedMatches = group.matches.filter((match) => {
        return match.state === matchStates.DONE;
      });

      const table = getTable(group.teams, completedMatches);

      groups[index].table = table;
    });

    commit('setGroups', { tournament, groups });
  },

  finish({ commit, getters }, { teamIds }) {
    const tournament = getters.tournament;
    const teams = tournament.teams;
    const proceedingTeams = [];

    teams.forEach((team) => {
      const f = teamIds.find((t) => t === team.id);
      if (f) proceedingTeams.push(team);
    });

    commit('finish', { tournament, proceedingTeams });
  },

  updateMatchScore({ commit, getters }, { groupIndex, match }) {
    const tournament = getters.tournament;
    const matchIndex = tournament.groupstage.groups[groupIndex].matches.findIndex(m => m.id === match.id);

    commit('updateMatchScore', { tournament, matchIndex, groupIndex, match });
  },

  updateMatch({ dispatch, getters }, { groupIndex, match }) {
    dispatch('updateMatchScore', { groupIndex, match });

    dispatch('updateTable', { groupIndex });
  },

  setGroups({ commit, getters }, { groups }) {
    const tournament = getters.tournament;

    commit('setGroups', { tournament, groups });
  }
}
