import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: 'trung kien',
        completed: false,
      },
      {
        id: 2,
        name: 'trung kien2',
        completed: true,
      },
      {
        id: 3,
        name: 'trung kien3',
        completed: false,
      },
      {
        id: 4,
        name: 'trung kien4',
        completed: false,
      }
    ],
    count: 1,
  },
  getters: {
    // ...
    getNumberTask(state) {
      return state.tasks.filter(el => el.completed === false).length;
    },
    getTasks(state) {
      return state.tasks;
    }
  },
  mutations: {
    addTask(state, name) {
      if ( name !== "") {
        state.tasks.push({
          id: Math.random(),
          name: name,
          completed: false,
        })
      }
    },
    changeStatus(state, task) {
      let idx = state.tasks.findIndex(el => el.id === task.id);
      let newTask = {
        id: task.id,
        name: task.name,
        completed: !task.completed,
      }
      // state.tasks[idx] = newTask; can't cause  
      //( https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats ) 
      // for array and object
      Vue.set(state.tasks, idx, newTask) ;
    }
    ,
    removeTask: (state, index) => state.tasks.splice(index, 1) ,
    removeAllTasks: (state) => Vue.set(state , "tasks",[]), //  or state.tasks = [] .
    removeCompletedTasks: (state) => state.tasks = state.tasks.filter( el => el.completed === false )
  },
  actions: {
    
  },
  modules: {
  }
})
