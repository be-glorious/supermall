<template>
  <div class="tab-bar-item" @click="tabbarClick" :style="colorActive">
    <div v-if="!isActive"><slot name="tabbar_img"></slot></div>
    <div v-else><slot name="img_active"></slot></div>
    <div :class={active:isActive}><slot name="tabbar_text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  data(){
    return{
      // isActive:true
    }
  },
  props:{
    path:String,
    textColor:{
      type:String,
      default:"rgb(78,140,238)"
    }
  },
  computed:{
    tabbarClick(){
      this.$router.push(this.path);
    },
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1; 
    },
    colorActive(){
      return this.isActive ?{color:this.textColor}:{};
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    margin-top: 3px;
    color: rgb(191, 191, 191);
  }
  /* .active{
    color: rgb(78,140,238)
  } */
</style>