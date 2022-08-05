<template>
  <div class="checkButton" :class="{isBorder:!isActive}">
    <img v-show="isActive" src="~assets/images/shopcart/check.svg" alt="">
  </div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    isActive:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.checkButton{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.checkButton img{
  width: 25px;
  height: 25px;
}
.isBorder{
  border: 1px solid black;
}
</style>