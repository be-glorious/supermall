<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="item in topImages" >
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
};
</script>

<style scoped>
 .slide {
    height: 300px;
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }

</style>