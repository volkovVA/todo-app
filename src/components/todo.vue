<template lang="pug">
  div
    div.todo
      todo-input(
        @addTodo="addTodo"
      )
      todo-list(
        :todos="todos"
      )
    pre {{todos}}  
</template>

<script>
import todoInput from './todoInput';
import todoList from './todoList';

export default {
  data () {
    return {
      todos: []
    }
  },
  components: {
    todoInput,
    todoList
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo {
    margin-top: 100px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px rgba(0, 0, 0, 0.1);
  }
</style>