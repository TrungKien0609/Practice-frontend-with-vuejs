import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: function () { // root stage for all modul, difference with ( stage : object ) only for 1 modul
    return {
      size: 10,
      isPressed: false,
    }
  },
  mutations: {
  },
  actions: {
    increaseSize({ state }) {
      if (state.size < 50) {
        state.size += 5;
      }
    },
    decreaseSize({ state }) {
      if (state.size > 5)
        state.size -= 5;
    },
    start({ state, dispatch }, input) {
      state.isPressed = true;
      dispatch('draw', input)
    },
    finish({ state }, input) {
      state.isPressed = false
      let ctx = input.canvas.getContext("2d");
      ctx.beginPath();
    },
    draw({ state }, input) {
      if (state.isPressed) {
        let ctx = input.canvas.getContext("2d");
        ctx.strokeStyle = input.color;
        ctx.lineWidth = state.size;
        ctx.lineCap = "round";
        ctx.lineTo(input.x, input.y)
        ctx.stroke();
      }
    },
    clearCanvas({ state }, input) {
      if (input !== null) {
        let ctx = input.canvas.getContext("2d");
        ctx.clearRect(0, 0, input.canvas.width, input.canvas.height);
      }
    }
  },
  modules: {
  }
})
