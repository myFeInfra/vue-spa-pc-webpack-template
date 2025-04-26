import { defineStore } from 'pinia'

interface HomeState {
  name: string
}

const useHomeStore = defineStore('home', {
  state: (): HomeState => ({
    name: 'home',
  }),
  actions: {
    setName(name: string) {
      this.name = name
    },
  },
  getters: {
    getName: (state) => state.name,
  },
})

export function useHomeStoreHook() {
  return useHomeStore()
}
