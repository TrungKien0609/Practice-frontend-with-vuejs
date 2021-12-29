import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'https://api.thecatapi.com/v1/images/search?breed_ids=beng&include_breeds=true',
    data: {} // khai báo kiểu của data trước
  },
  mutations: {
  },
  actions: {
    async getData({ state }) {
      const response = await fetch(state.url).then(response => response.json())
        .then(data => state.data = data[0]);
    }
  },
  modules: {
  }
})
