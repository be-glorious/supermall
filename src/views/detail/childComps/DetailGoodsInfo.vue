<template>
  <div>
    <div class="line"></div>
    <div class="new">新款上市</div>
    <div class="line"></div>
    <div class="clothes">
      <p class="clothesText">{{info.key}}</p>
      <div class="clothesImg">
        <img v-for="item in info.list" :src="item" alt="" @load="goodsImgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailGoodsInfo",
  props:{
    info:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    goodsImgLoad(){
      this.$emit('goodsImgLoad');
    }
  }
}
</script>

<style scoped>
.line{
  margin-top: 10px;
  height: 1px;
  background-color: rgb(2, 2, 2);
}
.new{
  text-align: center;
  margin-top:10px;
}
.clothesText{
  font-size: 20px;
  margin-top:10px;
  margin-left:10px;
}
.clothesImg{
  margin-top: 10px;
}
.clothesImg img{
  width: 100%;
}
</style>