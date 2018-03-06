import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
  store.subscribe((mutation, { tournaments }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tournaments))
  })
}

export default [localStoragePlugin];
