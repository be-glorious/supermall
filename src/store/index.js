import { createStore } from 'vuex'

export default createStore({
  state: {
    imgCounter: 0
  },
  getters: {},
  mutations: {
    itemImgLoad(state) {
      state.imgCounter++;
    }
  },
  actions: {},
  modules: {}
})