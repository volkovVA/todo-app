<template lang="pug">
  .todo-item
    label.label
      .input-block
        input(
          type="checkbox"
        ).input
      .title {{todo.name}}
    .button
      button(
        type="button"
      ).remove x  
</template>

<script>
export default {
  props: {
    todo: Object
  }
}


</script>

<style lang="scss" scoped>
   .list {
    font-size: 24px;
    border-bottom: 1pz solid #ededed;
  }

  .item {
    border-bottom: 1px solid #ededed;
    &:last-child {
      border-bottom: none;
    }
  }

  .todo-item {
    display: flex;
    align-items: center;

    &:hover {
      .remove {
        visibility: visible;
      }
    }
  }

  .label {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .input-block {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    padding: 15px 0;
    display: block;
    line-height: 1.2;
  }

  .button {
    width: 40px;
  }

  .remove {
    background: transparent;
    border: none;
    color: firebrick;
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
  }
</style>



