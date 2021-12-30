<template>
  <div id="app">
    <div
      class="container"
      ref="container"
      @mousedown="mouseDown"
      @mousemove="mouseMove"
      @mouseup="mouseUp"
      @mouseleave="mouseLeave"
    >
      <div class="box">01</div>
      <div class="box">02</div>
      <div class="box">03</div>
      <div class="box">04</div>
      <div class="box">05</div>
      <div class="box">06</div>
      <div class="box">07</div>
      <div class="box">08</div>
      <div class="box">09</div>
      <div class="box">10</div>
      <div class="box">11</div>
      <div class="box">12</div>
      <div class="box">13</div>
      <div class="box">14</div>
      <div class="box">15</div>
      <div class="box">16</div>
      <div class="box">17</div>
      <div class="box">18</div>
      <div class="box">19</div>
      <div class="box">20</div>
      <div class="box">21</div>
      <div class="box">22</div>
      <div class="box">23</div>
      <div class="box">24</div>
      <div class="box">25</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPress: false,
      startX : 0 ,
      scrollLeft : 0
    };
  },
  methods: {
    mouseDown(e) {
      this.isPress = true;
      this.startX = e.pageX - this.container.offsetLeft
      this.scrollLeft = this.container.scrollLeft;
    },
    mouseMove(e) {
      if (this.isPress){
        const x = e.pageX - this.container.offsetLeft;
        const walk = (x -this.startX) * 3; // 3 is how fast scroll move
        this.container.scrollLeft = this.scrollLeft - walk
      }
    },
    mouseUp() {
      this.isPress = false;
    },
    mouseLeave() {
      this.isPress = false;
    },
  },
  computed: {
    container() {
      return this.$refs.container;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(145deg, #413579, #632a4c);
}
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
#app {
  .container {
    max-width: 900px;
    margin: 0 auto;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #fff;
    padding: 20px;
    overflow-x: auto; //  root
    white-space: nowrap; // root
    user-select: none;
    .box {
      width: 200px;
      height: 200px;
      display: inline-flex; // does not make flex item display "inline". It makes
      // flex container display "inline". similar to display: inline-block
      align-items: center;
      justify-content: center;
      font-size: 60px;
      color: #fff;
      background-color: #7043a5;
      margin: 0 10px;
    }
  }
}
</style>
