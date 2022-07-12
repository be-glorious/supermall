<template>
  <div class="detailShopInfo">
    <div class="shopLogo">
      <img :src="shop.logo" alt="">
      <div class="shopTitle">{{shop.name}}</div>
    </div>
    <div class="descBox">
      <div class="descLeft">
        <div class="descLeft1">
          <div class="fontSize">{{filters(shop.sells)}}</div>
          <div>总销量</div>
        </div>
        <div class="descLeft1">
          <div class="fontSize">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="descRight">
        <div class="descRight1" v-for="item in shop.score">
          <div>{{item.name}}</div>
          <div class="silentText" :class="{activeText:item.isBetter}">{{item.score}}</div>
          <div class="slientBgc" :class="{activeBgc:item.isBetter}">{{item.isBetter ? '高' : '低'}}</div>
        </div>
      </div>
    </div> 
    <div class="joinBox">
      <div class="join">进店逛逛</div>
    </div>
      
    
  </div>
</template>

<script>
export default {
  name:"DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    filters(sells){
      if(sells<10000) return sells;
      return (sells/10000).toFixed(1)+'万';
    }
  }
}
</script>

<style scoped>
  .fontSize{
    font-size: 25px;
  }
  .detailShopInfo{
    margin-left:10px;
    margin-right:10px;
    position: relative;
  }
  .shopLogo {
    margin-top: 20px;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
  }
  .shopLogo img{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    border: 1px solid rgba(0,0,0,0.2);
  }
  .shopTitle{
    margin-left: 20px;
    font-size: 20px;
  }
  .descBox{
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding-left: 1px;
  }
  .descLeft{
    display: flex;
    justify-content: space-around;
    border-right:solid 1px rgba(0,0,0,0.2);
    flex: 1;
    padding-right: 20px;
  }
  .descRight{
    flex: 1;
    box-sizing: border-box;
    margin-left: 20px;
    box-sizing: border-box;
  }
  .descLeft1{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .descRight1{
    display: flex;
    justify-content: space-between;
    padding-right:15px; 
    margin-top: 10px;
  }
  .descName{
    flex: 1;
  }
  .silentText{
    color: brown;
  }
  .slientBgc{
    background-color:brown;
    color: aliceblue;
  }
  .activeText{
    color: var(--color-tint);
  }
  .activeBgc{
    background-color:var(--color-tint);
    color: aliceblue;
  }
  .joinBox{
    height: 70px;
    margin-top: 15px;
  }
  .join{
    position: absolute;
    width: 150px;
    height: 50px;
    background-color: rgba(107, 116, 231,0.2);
    padding: 10px 15px;
    font-size: 20px;
    text-align: center;
    
    left: 50%;
    transform: translate(-50%);
    border-radius:15px; 
    box-sizing: border-box;
  }
</style>