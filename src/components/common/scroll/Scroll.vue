<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name:"Scroll",
  data(){
    return{
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
    })
    if(this.probeType == 2 || this.probeType == 3){
      this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position);
      })
    }
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp');
      })
    }
    
  },
 
  methods:{
    scrollTo(x,y,time=30){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    
    refresh(){
      this.scroll && this.scroll.refresh();
      console.log("测试刷新几次");
    },

    //完成加载
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    },

    //获得y值
    getCurrentY(){
      return this.scroll ? this.scroll.y : 0;
    }
  }
}
</script>