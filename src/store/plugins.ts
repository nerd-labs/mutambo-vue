import { Plugin, Store } from 'vuex';
import { STORAGE_KEY } from './config';

export const localStoragePlugin: Plugin<any> = (store: Store<any>) => {
  store.subscribe((mutation, { tournaments }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tournaments));
  });
};
