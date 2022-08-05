<template>
  <div class="detail">
    <toast :message="message" :isshow="isshow"/>
    <detail-nav-bar class="navbar" @titleClick="titleClick" ref="navbar"/>
    <detail-swiper class="swiper" :top-images="topImages"/>
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :info="info" @goodsImgLoad="goodsImgLoad"/>
    <!-- 如果用better-scroll 这里要图片监听 -->
    <detail-param-info :paramInfo="paramInfo" ref="paramInfo" />
    <detail-comment :commentInfo="commentInfo" ref="commentInfo" />
    <goods-list :goods="recommends" ref="goods" class="goodsList"/>
    <detail-bottom-bar class="bottomBar" @carClick="addClick"/>
    <top-back class="topClick" @click.native="topClick" v-show="isShowTopBack"/>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import Toast from 'components/common/toast/Toast'

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
import DetailBottomBar from './childComps/DetailBottomBar'

import {backTopMixin}from 'common/mixin'

import {mapActions}from 'vuex'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    DetailBottomBar,
    Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      info: {},
      paramInfo: {},
      commentInfo: {},
      recommends: {},
      themeTopYs: [],
      positionY:null,
      length:0,
      currentIndex:0,
      isShowTopBack: false,
      message:'',
      isshow:false,
    };
  },
  mixins:[backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      
      this.shop = new Shop(data.shopInfo);
      this.info = data.detailInfo.detailImage[0];
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // console.log( this.goods);
      
      //取评论数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate;
      }
    });

    getRecommend(this.iid).then(res => {
      this.recommends = res.data.data.list;
    });

  },

  mounted(){
    //监听滚动
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    ...mapActions(['carClick']),
    //标题的点击
    titleClick(index) {
      // document.documentElement.scrollTop=this.themeTopYs[index];
      window.scrollTo({
        top: this.themeTopYs[index],
        behavior: "smooth"
      });
    },

    //详情页图片监听
    goodsImgLoad(){
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop);
        this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop);
        this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        
    },

    //滚动的回调函数---改变navbar的标题
    handleScroll(){
      this.positionY = window.pageYOffset;
      this.length = this.themeTopYs.length;
      for(let i = 0;i <this.length;i++){
        if(this.themeTopYs[i]<=this.positionY && this.themeTopYs[i+1]>this.positionY){
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }      

      //判断是否显示回到顶部
      this.isShowTopBack = this.positionY > 1000;
    },

    //购物车信息
    addClick(){
      const product = {};
      product.iid = this.iid;
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      // this.$store.dispatch('carClick',product);
      this.carClick(product).then(res => {
        this.isshow = true;
        this.message = res;
        setTimeout(()=>{
          this.isshow=false;
          this.message="";
        },2000)

      });
      
    }

  },

};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  /* height: 100vh; */
}
/* .content{
  height: calc(100%-49px);
} */
.navbar {
  position: fixed;
  z-index: 10;
  background-color: #fff;
  width: 100%;
  top: 0;
}
.swiper {
  margin-top: 49px;
}

.goodsList{
  margin-bottom: 49px;
}

/* 底部工具栏 */
.bottomBar{
  width: 100%;
  height: 49px;
  background-color:rgb(255, 255, 255);
  z-index: 9999;
  position: fixed;
  right: 0;
  left: 0;
  bottom: -1px;
}
.topClick{
  z-index: 9999;
}
</style>