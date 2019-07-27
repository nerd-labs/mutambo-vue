import { Plugin, Store } from 'vuex';
import { STORAGE_KEY } from './config';
import { RootState } from './state';

export const localStoragePlugin: Plugin<RootState> = (store: Store<RootState>) => {
  store.subscribe((mutation, { tournaments }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tournaments));
  });
};
