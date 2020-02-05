<template lang="pug">
  div
    div.todo
      todo-input(
        @addTodo="addTodo"
      )
      todo-list(
        v-if="todos.length > 0"
        :todos="filteredTodos"
        @removeTodo="removeTodo"
        @checkTodo="checkTodo"
        @filterTodos="filterTodos"
      )
</template>

<script>
import todoInput from './todoInput';
import todoList from './todoList';

export default {
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    todoInput, todoList
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filteredTodos() {
      switch (this.filter) {
        case "all":
          return this.todos;
        case "active":
          return this.todos.filter(item => item.checked === false);
        case "completed":
          return this.todos.filter(item => item.checked);
      }
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(item => item.id !== todoId);
    },
    checkTodo(todo) {
      this.todos = this.todos.map(item => (item.id === todo.id ? todo : item))
    },
    filterTodos(filter) {
      this.filter = filter;
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