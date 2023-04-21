import { createStore } from 'vuex'
import i18n from '@/language/i18n'
import service from "@/services/service"

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      profile : {}
    }
    },
  mutations: {
    increment (state) {
      state.count++
      },
      SET_LANG(state, payload) {
         i18n.global.locale = payload
    },
    SET_PROFILE(state, payload) {
      state.profile = payload
 }
    },
    actions: {
        setLang({ commit }, payload) {
            commit('SET_LANG',payload)
      },
       fetchLogin({ commit }, payload) {
        commit("SET_PROFILE" , payload)
    },
  }
})
export default store
