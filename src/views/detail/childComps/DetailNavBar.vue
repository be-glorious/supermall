<template>
  <nav-bar class="navbar">
    <template v-slot:left>
      <slot>
        <div @click="backClick">
          <img class="back" src="~assets/images/common/back.svg" alt />
        </div>
      </slot>
    </template>
    <template v-slot:center>
      <slot>
        <div class="title">
          <div
            v-for="(item,index) in titles"
            class="titleText"
            @click="titleClick(index)"
            :class="{active:index===currentIndex}"
          >{{item}}</div>
        </div>
      </slot>
    </template>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["详情", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
/* .navbar{
  position: relative;
  z-index: 9;
  background-color: #fff;
} */
.back {
  margin-top: 15px;
}
.titleText {
  font-size: 17px;
  flex: 1;
}
.title {
  display: flex;
}
.active {
  color: var(--color-tint);
}
</style>