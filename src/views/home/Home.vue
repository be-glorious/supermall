<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <slot>购物街</slot>
      </template>
    </nav-bar>

    <tab-control v-show="isTabFixed" class="tab-control" :titles="['流行','新款','精选']" @tabClick="tab" ref="tabControl1"/>

    <scroll class="content" 
      ref="scroll" 
      :probe-type="3" 
      @scroll="contentScroll" 
      :pull-up-load = "true"
      @pullingUp = "pullLoad"
     >
      <home-swiper :cbanners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend :crecommends="recommends"></home-recommend>
      <feature />
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tab" ref="tabControl2"/>
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <top-back @click.native="topClick" v-show="isShowTopBack"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import TopBack from 'components/content/topBack/TopBack'

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import Feature from "./childComps/Feature";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    TopBack,
    HomeSwiper,
    HomeRecommend,
    Feature
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowTopBack:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,
    };
  },
  computed:{
    img(){
      return this.$store.state.imgCounter;
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated(){
    this.$refs.scroll.crollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y;
  },
 
  methods: {
    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
      if(this.$refs.scroll){
        this.$refs.scroll.finishPullUp();
      }
    },

    //方法
    tab(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到顶部
    topClick(){
      this.$refs.scroll.scrollTo(0,0,300);
      
    },
    contentScroll(position){
      //1 判断是否显示topBack
      this.isShowTopBack = (-position.y)>1000;

      //2 判断是否显示小tabbar
      this.isTabFixed = (-position.y)>this.tabOffsetTop;
    },

    //防抖函数
    debounce(func,delay){
      let timer = null
      return function(...args){
        if(timer){
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          func.apply(this,args);
        }, delay);
      }
    },
    //上拉加载更多
    pullLoad(){
      this.getHomeGoods(this.currentType);
    },

    //轮播图图片监听
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }


   
  },
  watch:{
    img(newName,oldName){
      const re = this.debounce(this.$refs.scroll.refresh,200);
      re();
      // this.$refs.scroll.refresh();	
      // this.debounce(this.$refs.scroll.refresh)()
    }
  },
};
</script>

<style scoped>
#home {
  padding-top: 49px;
  height: 100vh;
  position: relative;
}

.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control{
  position: relative;
  z-index: 9;
}

.content{
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 53px;
  /* height:calc(100% - 102px);
    	100% - 93就等于中间，由于全减的是bottom，所以要加个margin-top
  overflow:hidden;
  margin-top:49px; */
}

</style>