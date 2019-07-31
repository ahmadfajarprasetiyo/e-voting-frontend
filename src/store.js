import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nilai_n: 0,
    nilai_e: 0,
    nilai_d: 0
  },
  plugins: [createPersistedState()],
  mutations: {
    updatePrivateKey(state, payload){
      state.nilai_n = payload.nilai_n
      state.nilai_e = payload.nilai_e
      state.nilai_d = payload.nilai_d
    }
  },
  getters:{
    getNilaiN: state => {
      return state.nilai_n
    },
    getNilaiE: state => {
      return state.nilai_e
    },
    getNilaiD: state => {
      return state.nilai_d
    },
  },
  actions: {
  }
})
