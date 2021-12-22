<template>
  <div class="task-container">
    <p :class="{'completed' : task.completed}" @click="changeStatus(task)">{{task.name}}</p>
    <button class="btn" @click="removeTask(index)"><i class="fas fa-times"></i></button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["task","index"],
  methods:{
      ...mapMutations(['changeStatus','removeTask']),
  }
};
</script>
<style lang="scss">
.task-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  p {
    display: inline-block;
    width: 100%;
    background-color: #ddd;
    padding: 1rem;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
      background-color: #bbb;
    }
    &.completed {
      text-decoration: line-through;
      background-color: rgba(0, 128, 0, 0.15);
      border-color: rgba(0, 128, 0, 0.2);
    }
    &.completed:hover {
      background-color: rgba(0, 128, 0, 0.25);
      border-color: rgba(0, 128, 0, 0.3);
    }
  }
  button {
    padding: 1rem;
    font-size: 1rem;
    background-color: #ec5840;
    transition: 0.25s;
    &:hover {
      background-color: #da3116;
    }
  }
}
</style>