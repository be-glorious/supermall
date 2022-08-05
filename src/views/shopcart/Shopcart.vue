<template>
  <div>
    <nav-bar class="navbar">
      <template v-slot:center><div>购物车({{cartLength}})</div></template>
    </nav-bar>
    <cart-list/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import {mapGetters} from 'vuex'

import CartList from './childComps/CartList'

export default {
  name:"ShopCart",
  components:{
    NavBar,
    CartList
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.navbar{
  background-color: var(--color-tint);
  color: aliceblue;
}
</style>