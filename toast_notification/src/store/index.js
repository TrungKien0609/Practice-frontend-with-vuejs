import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toasts: [],
    successToast: {
      id: Math.random(),
      message: "This is a success message !",
      icon: "fas fa-check-circle",
      signal: 'success',
    },
    warningToast: {
      id: Math.random(),
      message: "This is a warning message !",
      icon: "fas fa-exclamation-circle",
      signal: 'warning',
    },
    errorToast: {
      id: Math.random(),
      message: "This is a error message !",
      icon: "fas fa-exclamation-triangle",
      signal: 'error',
    }
  },
  mutations: {
    // createToast(state, obj) {
    //   return state.toasts.push(obj); 
    // }
  },
  actions: { // commit can't get return value from muatation
    createToast({ commit, state }, obj) {
      state.toasts.push(obj);
    },
    removeToats({state}){
      setTimeout(() => {
        state.toasts.shift(); /// not smooth
      }, 5500);
    }
  },
  modules: {
  }
})
