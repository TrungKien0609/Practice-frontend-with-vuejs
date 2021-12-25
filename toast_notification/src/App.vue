<template>
  <div id="app">
    <button class="btn success-btn" @click="createToast(successToast)">
      Show Success
    </button>
    <button class="btn warning-btn" @click="createToast(warningToast)">
      Show Warning
    </button>
    <button class="btn error-btn" @click="createToast(errorToast)">
      Show Error
    </button>
    <div id="toast">
      <toast v-for="(item, index) in toasts" :key="index" :Toast="item"></toast>
    </div>
  </div>
</template>

<script>
import toast from "./components/toast.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    toast,
  },
  computed: {
    ...mapState(["successToast", "warningToast", "errorToast", "toasts"]),
  },
  methods: {
    ...mapActions(["createToast"]),
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
  #app {
    .btn {
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 500;
      color: #fff;
      padding: 0.7rem 1rem;
      border-radius: 0.4rem;
      margin: 0.8rem;
      position: relative;
      z-index: 1000;
      &.success-btn {
        background-color: #008000;
      }
      &.warning-btn {
        background-color: #ffa500;
      }
      &.error-btn {
        background-color: #ff0000;
      }
    }
    #toast {
      width: 350px;
      position: fixed;
      z-index: 2;
      top: 10px;
      right: 0;
    }
  }
}
</style>
