<template>
  <div v-if="Object.keys(goods).length !== 0" class="detailBaseInfo">
    <div class="title margin-top2">{{goods.title}}</div>
    <div class="price margin-top1">
      <div class="newPrice">{{goods.newprice}}</div>
      <div class="oldPrice margin-top1"><del>{{goods.oldPrice}}</del></div>
      <div class="discount">{{goods.discount}}</div>
    </div>
    <div class="infoBox">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="line margin-top1"></div>
    <div class="subBox margin-top2">
      <div class="subSmallBox" v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt="">
        <div>{{goods.services[index-1].name}}</div>
      </div>
    </div>
    <div class="line margin-top1"></div>

  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.margin-top1{
  margin-top: 20px;
}
.margin-top2{
  margin-top: 23px;
}
.detailBaseInfo {
  margin-left: 10px;
  margin-right: 8px;
}
.title {
  font-size: 18px;
}
.price {
  display: flex;
}
.newPrice {
  font-size: 25px;
  color: var(--color-tint);
}
.oldPrice{
  margin-left: 10px;
}
.discount{
  background-color: var(--color-tint);
  height:20px;
  margin-left: 10px;
  color: white;
  padding: 2px 5px;
  border-radius: 15px;
}
.infoBox{
  display: flex;
  justify-content: space-between;
}
.infoBox div{
  margin-top: 23px;
}
.line{
  border-bottom:1px solid rgba(0, 0, 0, 0.1); 
}
.subBox{
  display: flex;
  justify-content: space-between;
}
.subBox img {
  width: 15px;
  height: 15px;
}
.subSmallBox{
  display: flex;
  flex-direction: row;
}
</style>