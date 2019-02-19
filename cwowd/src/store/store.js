import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  // mutations: {
  // eslint-disable-next-line
  //setToken(state, token) {
  //  state.token = token
  //  if (token) {
  //    state.isUserLoggedIn = true
  //  } else {
  //
  //    state.isUserLoggedIn = false
  //  }
  // },
  // eslint-disable-next-line
  // setUser(state, user) {
  // state.user = user
  // }
  // },
  mutations: {
    // eslint-disable-next-line
    setToken(state, token) {
      state.token = token
      state.isUserLoggedIn = !!token
    },
    // eslint-disable-next-line
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    // eslint-disable-next-line
    setToken({commit}, token) {
      commit('setToken', token)
    },
    // eslint-disable-next-line
    setUser({commit}, user) {
      commit('setUser', user)
    }
  }
})
