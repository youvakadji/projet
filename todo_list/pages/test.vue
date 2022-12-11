<template>
    <main>
      <h1>Task Board</h1>
      <p>Create a list of tasks</p>
  
      <!-- <button @click="addTask">Add todo-list</button> -->
  
      <div class="tasks">
        <input
          type="text"
          v-model="value"
        />
      </div>
    </main>
  </template>
  
  <script>
  export default {
    data (){
      return {
        value: [],
      }
    },
    
    watch: {
      value(newValue){
          newValue = [{value: newValue}]
          var parsed = JSON.stringify(newValue)
          localStorage.setItem('todolist', parsed)
      },
    },
    mounted() {
      if (localStorage.getItem('todolist')) {
        var valuejson = JSON.parse(localStorage.getItem('todolist'))
        this.value = valuejson[0].value
      }
    },
    
    
  }
  </script>
