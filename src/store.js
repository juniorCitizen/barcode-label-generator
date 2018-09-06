import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lotNumber: '',
    mockupHandle: null,
  },
  mutations: {
    setLotNumber(state, value) {
      state.lotNumber = value
    },
    setMockupHandle(state, htmlElement) {
      state.mockupHandle = htmlElement
    },
  },
  actions: {},
})
