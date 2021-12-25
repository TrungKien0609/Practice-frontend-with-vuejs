<template>
  <div class="toast" :class="[ true ? Toast.signal : '', hide ? 'hide' : '']">
    <i :class="Toast.icon"></i>
    <p>{{ Toast.message }}</p>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  props: ["Toast"],
  data(){
    return{
       hide : false 
    }
  },
  created(){
     setTimeout(() => {
       this.hideSlide();
     }, 4000);
     this.removeToats()
  },
  methods:{
    hideSlide(){
       this.hide = true ;
    },
    ...mapActions(['removeToats'])
  }
};
</script>
<style lang="scss">
.toast {
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  border-radius: 5px;
  border-left: 5px solid;
  animation: show_slide 1s ease forwards;
  position: relative;
  &.hide {
    animation: hide_slide 1s ease forwards;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    animation: countdown 4s 0.3s ease-in-out forwards;
  }
  &.success {
    background-color: #00800066;
    border-color: #008000;
  }
  &.success::before {
    background-color: #008000;
  }
  &.warning {
    background-color: #ffa50066;
    border-color: #ffa500;
  }
  &.warning::before {
    background-color: #ffa500;
  }
  &.error {
    background-color: #ff000066;
    border-color: #ff0000;
  }
  &.error::before {
    background-color: red;
  }
  i {
    font-size: 1.9rem;
    margin-right: 1rem;
  }
}
@keyframes show_slide {
  0% {
    transform: translateX(100%);
  }
  40% {
    transform: translateX(-10%);
  }
  80% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-10px);
  }
}
@keyframes hide_slide {
  0% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(0%);
  }
  80% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(120%);
  }
}
@keyframes countdown {
  20% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>