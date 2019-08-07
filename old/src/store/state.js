import { STORAGE_KEY } from './config';

export default {
  tournaments: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
};
