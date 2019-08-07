import { STORAGE_KEY } from './config';

export interface RootState {
  tournaments: any[];
}

export const state: RootState = {
  tournaments: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
};
