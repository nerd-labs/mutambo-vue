import { STORAGE_KEY } from './config';

export const state = {
  tournaments: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
};
