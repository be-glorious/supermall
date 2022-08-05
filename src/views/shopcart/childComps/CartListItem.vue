<template>
  <div class="cartListItem">
    <check-button class="checkButton" :isActive="itemInfo.checked" @click.native="itemClick"/>
    <div class="rightCart">
      <img :src="itemInfo.image" alt="">
      <div class="rightText">
        <div class="info">{{itemInfo.title}}</div>
        <div class="desc">{{itemInfo.desc}}</div>
        <div class="priceBox">
          <div class="price">￥{{itemInfo.price}}</div>
          <div class="count">×{{itemInfo.count}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"
export default {
  name:"CartListItem",
  components:{
    CheckButton,
  },
  props:{
    itemInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    itemClick(){
      return this.itemInfo.checked = !this.itemInfo.checked;
    }
  }
}
</script>

<style scoped>
.cartListItem{
  height: 150px;
  width: 100%;
  display: flex;
}
.checkButton{
  position: relative;
  top: 50%;
  transform: translate(10px,-50%);
}
.cartListItem img{
  width: 90px;
  height: 120px;
  position: relative;
  top: 50%;
  transform: translate(10px,-50%);
  border-radius: 15px;
}
.rightCart{
  display: flex;
  margin-left: 10px;
}
.rightText{
  margin-top: 20px;
  margin-left: 20px;
  width: 220px;
}
.info{
  font-size: 20px;
  font-weight: 600;
}
.desc{
  margin-top: 20px;
}
.info,.desc{
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.price{
  color: rgb(245, 48, 48);
  margin-top: 30px;
  font-size: 20px;

}
.priceBox{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.count{
  font-size: 20px;
  margin-top: 30px;
}
</style>