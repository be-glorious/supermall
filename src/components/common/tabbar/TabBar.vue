<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<style scoped>
  #tab-bar{
    text-align: center;

    display: flex;
    height: 53px;
    background-color: aliceblue;

    position: fixed;
    bottom:0px;
    right: 0;
    left: 0;

    box-shadow: 0px -1px 4px rgb(222, 236, 235);

    padding-bottom: 3px;
  }
</style>