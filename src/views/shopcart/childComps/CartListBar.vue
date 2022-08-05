<template>
  <div class="cartListBar">
    <toast :message="message" :isshow="isshow"/>
    <div class="left">
      <check-button :isActive="isSelectAll" @click.native="allClick"/>
      <div class="all">全选</div>
    </div>
    <div class="num">
      <div>合计:</div>
      <div class="price">{{totalPrice}}</div>
    </div>
    <div class="right" @click="calcClick">
      结算({{checkLength}})
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckButton from 'components/content/checkbutton/CheckButton'
import Toast from 'components/common/toast/Toast'
export default {
  name:"CartListBar",
  components:{
    CheckButton,
    Toast
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return '￥'+this.cartList.filter(item =>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count;
      },0)
    },
    checkLength(){
      return this.cartList.filter(item =>{
        return item.checked
      }).length
    },
    isSelectAll(){
      if(this.cartList.length==0) return false;
      return !this.cartList.find(item=>!item.checked);
    }
  },
  methods:{
    allClick(){
      if(this.isSelectAll){
        this.cartList.forEach(item=>item.checked = false);
      }else{
        this.cartList.forEach(item => item.checked = true);
      }
    },
    calcClick(){
      if(!this.isSelectAll){
        this.message="请选中商品"
        this.isshow=true;
        setTimeout(()=>{
          this.message="";
          this.isshow=false;
        },1500)
        
      }
    },
  },
  data(){
    return{
      message:"",
      isshow:false
    }
  }
}
</script>

<style scoped>
.cartListBar{
  z-index: 99;
  display: flex;
  width: 100%;
  height: 30px;
  background-color: rgb(237, 237, 241);
  position: fixed;
  bottom: 55px;
}
.left{
  display: flex;
  margin-left: 10px;
  align-items: center;
}
.all{
  margin-left: 10px;
}
.num{
  display: flex;
  margin-left: 30px;
  line-height: 30px;
  flex: 1;
}
.price{
  margin-left: 5px;
}
.right{
  width: 60px;
  background-color: var(--color-tint);
  text-align: center;
  line-height: 30px;
  flex: 1;
  color: aliceblue;
}
</style>