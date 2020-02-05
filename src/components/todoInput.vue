<template lang="pug">
  .todo-input
    input(
      type="text"
      placeholder="Todo Name"
      autofocus
    ).input
</template>

<style lang="scss" scoped>
  .input {
      font-size: 24px;
      padding: 16px 16px 16px 60px;
      border: none;
      background: rgba(0, 0, 0, 0.03);
      box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
      line-height: 1.4em;
      outline: none;
      color: inherit;
      width: 100%;
      background: #fff;
  }
</style>