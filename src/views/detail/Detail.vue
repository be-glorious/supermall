<template>
  <div class="detail">
    <detail-nav-bar class="navbar" />
    <!-- <scroll class="content"> -->
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :info="info" />
    <!-- 如果用better-scroll 这里要图片监听 -->
    <detail-param-info :paramInfo="paramInfo" />
    <detail-comment :commentInfo="commentInfo" />
    <goods-list :goods="recommends"/>
    <!-- </scroll> -->
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import GoodsList from 'components/content/goods/GoodsList';

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";

import { getDetail, Goods, Shop, GoodsParam,getRecommend } from "network/detail";
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
    DetailComment
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
      recommends:{},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;
      // console.log(data);
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
      //取评论数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate;
      }
    });

    getRecommend(this.iid).then(res => {
      this.recommends = res.data.data.list;
      // console.log(this.recommends);
    })
  }
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
}
.navbar{
  position: relative;
  z-index: 10;
  background-color: #fff;
} */
</style>