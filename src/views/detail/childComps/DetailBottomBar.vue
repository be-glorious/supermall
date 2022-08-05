<template>
  <div class="bottomBar">
    <div class="bottomLeft">
      <div>
        <img src="~assets/images/detail/customer.svg" alt="">
        <p>客服</p>
      </div>
      <div>
        <img src="~assets/images/detail/collection.svg" alt="">
        <p>收藏</p>
      </div>
      <div>
        <img src="~assets/images/detail/store.svg" alt="">
        <p>店铺</p>
      </div>
    </div>
    <div class="bottomRight">
      <div class="car" @click="carClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailBottomBar",
  methods:{
    carClick(){
      this.$emit('carClick');
    }
  }
}
</script>

<style scoped>
.bottomBar{
  display: flex;
}
.bottomLeft{
  padding-top: 5px;
  flex:1;
  display: flex;
  justify-content: space-around;
}
.bottomRight{
  flex: 1;
  display: flex;
  margin-right: 15px;
  font-size: 14px;
}
.bottomLeft img{
  width: 25px;
  height:25px;
}
.bottomLeft p{
  font-size: 10px;
}
.car{
  background-color: rgb(147, 183, 240);
  flex: 1;
  line-height: 35px;
  height: 35px;
  margin: auto;
  text-align: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  color: white;
}
.buy{
  line-height: 35px;
  margin: auto;
  flex:1;
  text-align: center;
  height: 35px;
  background-color: var(--color-tint);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  color: aliceblue;
}
</style>