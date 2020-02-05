<template lang="pug">
  .todo-list
    .content
        ul.list
            li.item
              .todo-item
                label.label
                  .input-block
                    input(
                      type="checkbox"
                    ).input
                  .title todo name
                .button
                  button(
                    type="button"
                  ).remove x    
            li.item
              .todo-item
                label.label
                  .input-block
                    input(
                      type="checkbox"
                    ).input
                  .title todo name
                .button
                  button(
                    type="button"
                  ).remove x    


    .footer
      .footer-content
        .counter 10 items left
        .filter    


</template>

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

  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    font-size: 14px;

    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2),0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
  }

</style>