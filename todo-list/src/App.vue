<template>
  <div id="app">
    <h1>
      Tasks <span>({{ getNumberTask }})</span>
    </h1>
    <form action="#" class="add-task">
      <input type="text" name="" placeholder="New task" v-model.trim="text" />
      <button class="btn submit-btn" @click.prevent="addTask(text)">
        <i class="fas fa-plus"></i> Add
      </button>
    </form>
    <div class="action">
      <button class="btn clear-completed-btn" @click="removeCompletedTasks">
        <i class="fas fa-check"></i> Clear Completed
      </button>
      <button class="btn clear-all-btn" @click="removeAllTasks">
        <i class="fas fa-trash-alt"></i> Clear All
      </button>
    </div>
    <div>
      <task
        v-for="(task, index) in getTasks"
        :task="task"
        :index="index"
        :key="index"
      ></task>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import Task from "./components/Task.vue";
export default {
  data() {
    return {
      text: "",
    };
  },
  components: { Task },
  computed: {
    ...mapGetters(["getNumberTask", "getTasks"]),
  },
  methods: {
    ...mapMutations(["addTask","removeAllTasks","removeCompletedTasks"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
*,
h1,
button {
  font-family: "poppin", sans-serif;
}
i {
  color: #fff;
}
.btn {
  outline: none;
  border: none;
  cursor: pointer;
}
body {
  background-color: #abc;
  #app {
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 2rem;
    padding: 2rem 1rem;
    box-shadow: 0px 0.25rem 1rem rgba(black, 0.25);
    h1 {
      font-weight: 500;
      font-size: 2.5rem;
      span {
        color: #ccc;
      }
    }
    form {
      margin-top: 1.2rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      input {
        width: 100%;
        outline: none;
        border: 1px solid #ccc;
        padding: 0.5rem;
        font-size: 1.03rem;
        transition: 0.25s;
        &::placeholder {
          color: #ccc;
        }
        &:focus {
          box-shadow: 0px 0px 0px 1px rgba(black, 0.4);
        }
      }
      .submit-btn {
        background-color: #2199e8;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #fff;
        padding: 1rem;
        font-size: 1.03rem;
        font-weight: 500;
        transition: 0.25s;
        &:hover {
          background-color: #1583cc;
        }
        i {
          margin-right: 0.4rem;
        }
      }
    }
    .action {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
      margin-top: 1rem;
      .clear-completed-btn,
      .clear-all-btn {
        color: #fff;
        padding: 1rem;
        font-size: 1.02rem;
        transition: 0.25s;
      }
      .clear-completed-btn {
        background-color: #ffae00;
        &:hover {
          background-color: #cc8b00;
        }
      }
      .clear-all-btn {
        background-color: #ec5840;
        &:hover {
          background-color: #da3116;
        }
      }
    }
  }
}
</style>
