<template>
  <swiper class="home-swiper">
    <swiper-item v-for="(item,index) in cbanners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper';
    export default {
        name: "HomeSwiper",
        props: {
            cbanners:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data(){
          return{
            isLoad:false
          }
        },
        components:{
            Swiper,SwiperItem
        },
        methods:{
          imageLoad(){
          if(!this.isLoad){
              this.$emit('swiperImageLoad');
              this.isLoad = true;
            }
          }
        }
    }
</script>

<style scoped>
.slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }

</style>
