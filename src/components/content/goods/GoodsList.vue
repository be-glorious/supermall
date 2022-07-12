<template>
  <div class="goods-item" >
    <goods-list-item v-for="item in goods" :goods-item = "item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name:"GoodsList",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Object,
      default(){
        return{}
      }
    }
  },
}
</script>

<style scoped>
  .goods-item{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    
  }
</style>