import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
    getters: {
      currentCount: (state) => state.count,
    },
    actions: {
      increment() {
        this.count++
      },
    },
})