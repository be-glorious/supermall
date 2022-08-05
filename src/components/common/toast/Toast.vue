<template>
  <div v-show="isshow" class="toast">{{message}}</div>
</template>

<script>
export default {
  name:"Toast",
  props:{
    message:{
      type:String,
      default:""
    },
    isshow:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(41, 42, 43, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
    color: aliceblue;
    z-index: 99;
    font-size: 18px;
  }
</style>