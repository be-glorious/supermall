<template>
  <div class="cartList">
    <scroll class="content">
      <div class="listItem" v-for="(item,index) in cartList" :key="index" >
        <cart-list-item :item-info = "item"/>
      </div>
    </scroll>
    <cart-list-bar/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'
import CartListBar from './CartListBar'


export default {
  name:"CartList",
  components:{
    CartListItem,
    CartListBar,
    Scroll
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods:{
    // listClick(item){
    //   // console.log(item.iid);
    //   this.item.checked = !isActive;
      
    // }
  }
}
</script>

<style scoped>
.listItem{
  height: 150px;
  border-bottom: solid rgb(144, 141, 148) 1px;
}
.cartList{
  height:100%;
}
.content{
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 83px;
  /* height: calc(100% - 49px - 83px); */
  /* calc不起作用 */
}
</style>