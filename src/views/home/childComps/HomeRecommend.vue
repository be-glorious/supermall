<template>
  <div id="home-recommend">
    <div v-for="item in crecommends" class="recommend-item" :key="item">
      <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeRecommend",
  props:{
    crecommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
#home-recommend{
  width: 100%;
  display: flex;
  text-align: center;
  padding: 8px 0 20px 0;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
}
</style>