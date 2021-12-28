<template>
  <div id="app">
    <div class="nav-bar">
      <input type="color" id="color" ref="color" @change="changeColor" />
      <button class="btn erase-btn" @click="erase">
        <i class="fas fa-eraser"></i>
      </button>
      <button class="btn decre-btn" @click="decreaseSize">-</button>
      <button class="btn line-width-btn">{{ size }}</button>
      <button class="btn incre-btn" @click="increaseSize">+</button>
      <button class="btn dowload-btn" @click="dowload">
        <i class="fas fa-download"></i>
      </button>
      <button class="btn erase-all-btn" @click="clearCanvas(canvas)">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <canvas
      id="canvas"
      ref="canvas"
      @mousedown="start(canvas)"
      @mouseup="finish(canvas)"
      @mousemove="drawLine"
    ></canvas>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      canvas: null,
      color: "black",
    };
  },
  methods: {
    changeColor() {
      this.color = this.$refs.color.value;
    },
    erase() {
      this.color = "#fff";
    },
    dowload() {
      const canvas = this.$refs.canvas;
      const anchor = document.createElement("a");
      anchor.href = canvas.toDataURL("image/png");
      anchor.download = "IMAGE.PNG";
      anchor.click();
    },
    drawLine(e) {
      let canvasInfor = {
        canvas: this.$refs.canvas,
        x: e.offsetX,
        y: e.offsetY,
        color: this.color,
      };
      this.canvas = canvasInfor;
      this.draw(canvasInfor);
    },
    ...mapActions([
      "start",
      "finish",
      "draw",
      "increaseSize",
      "decreaseSize",
      "clearCanvas",
    ]),
  },
  computed: {
    ...mapState(["size"]),
  },
  mounted() {
    this.$refs.canvas.width = window.innerWidth;
    this.$refs.canvas.height = window.innerHeight;
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow: hidden;
}
.btn {
  cursor: pointer;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: #fff;
  margin: 0 1rem;
  height: 40px;
  width: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  .nav-bar {
    background-color: steelblue;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    #color {
      height: 40px;
      width: 40px;
      padding: 0.25rem;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
