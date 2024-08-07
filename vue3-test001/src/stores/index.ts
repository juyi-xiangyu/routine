/*
 * @Description: 公共数据状态管理中心
 */
import { defineStore } from 'pinia'

export const useStore = defineStore('main',{
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count*2,
  },
  actions: {
    add() { 
      this.count++;
    }
  }
})
