<template>
  <div id="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<style scoped>
#nav-bar{
  height:49px;
  display: flex;
  text-align: center;
  line-height: 49px;
  font-size: 20px;
  box-shadow: 0px 1px 1px rgb(222, 236, 235)
}
.left{
  width:60px;
}
.right{
  width: 60px;
}
.center{
  flex: 1;
}

</style>