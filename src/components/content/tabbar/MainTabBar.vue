<template>
  <tab-bar>
    <tab-bar-item path="/home" textColor="rgb(78,140,238)">
      <template v-slot:tabbar_img>
        <img src="~/assets/images/tabbar/home.svg" alt />
      </template>
      <template v-slot:img_active>
        <img src="~/assets/images/tabbar/home_active.svg" alt />
      </template>
      <template v-slot:tabbar_text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:tabbar_img>
        <img src="~/assets/images/tabbar/category.svg" alt />
      </template>
      <template v-slot:img_active>
        <img src="~/assets/images/tabbar/category_active.svg" alt />
      </template>
      <template v-slot:tabbar_text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template v-slot:tabbar_img>
        <img src="~/assets/images/tabbar/shopcart.svg" alt />
      </template>
      <template v-slot:img_active>
        <img src="~/assets/images/tabbar/shopcart_active.svg" alt />
      </template>
      <template v-slot:tabbar_text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:tabbar_img>
        <img src="~/assets/images/tabbar/profile.svg" alt />
      </template>
      <template v-slot:img_active>
        <img src="~/assets/images/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:tabbar_text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.tab-bar-item img{
    width: 25px;
  }
</style>