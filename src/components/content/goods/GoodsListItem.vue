<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImage" @load="imgLoad" v-lazy="showImage"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img;
      // return this.goodsItem.show.img || this.goodsItem.image;
      //下面这个式子会报错，为何？
    }
  },
  methods: {
    imgLoad() {
      this.$store.commit("itemImgLoad");
    },
    itemClick() {
      this.$router.push('/detail/'+this.goodsItem.iid);
    }, 
  }
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  position: relative;
  padding-bottom: 44px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 15px;
}
.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 1/14px 14px;
}
</style>