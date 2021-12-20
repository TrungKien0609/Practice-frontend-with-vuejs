<template>
  <div class="input-container">
    <div :class="{ active: isActive, error: isError, input: true }">
      <input :type="typeInput" :placeholder="placeholder" v-model="value" />
    </div>
    <div class="error-infor" ref="error">{{ errorDesciption }}</div>
  </div>
</template>
<script>
export default {
  props: ["typeInput", "placeholder", "error"],
  data(){
    return {
      value: "",
      isActive: false,
      isError: false,
    };
  },
  computed: {
    errorDesciption() {
      if (this.error !== '') {
        if (this.error != "success") {
          this.isActive = false;
          this.isError = true;
          return this.error;
        } else {
          this.isActive = true;
          this.isError = false ;
          return "";
        }
      }
      return "";
    },
  },
};
</script>
<style scoped>
.input-container {
  width: 100%;
  margin: 20px 0;
}
.input-container input {
  width: 100%;
  outline: none;
  border: none;
  padding: 9px 0;
  font-size: 17px;
}
.input-container .input {
  position: relative;
  border-bottom: 3px solid #bbb;
}
.input-container .input.active {
  border-bottom-color: rgba(38, 145, 217, 0.9);
}
.input-container .input.error {
  border-bottom-color: rgba(255, 0, 0, 0.6);
}
.input-container .input::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background-color: #2691d9;
  opacity: 0.9;
  bottom: -3px;
  left: 0;
  transition: 0.35s;
}
.input-container .input:focus-within:after {
  width: 100%;
  background-color: #2691d9;
}
.input-container .error-infor {
  color: red;
  font-size: 14px;
  opacity: 0.9;
  height: 21px;
}
</style>