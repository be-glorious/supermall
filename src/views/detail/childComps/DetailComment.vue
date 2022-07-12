<template>
  <div class="detailComment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="line"></div>
    <div class="commentTop">
      <div>用户评价({{commentInfo.cRate}})</div>
      <div>更多</div>
    </div>
    <div v-for="(item,index) in commentInfo.list" :key="index">
      <div class="avatar">
        <img :src="item.user.avatar" alt />
        <div class="uname">{{commentInfo.list[0].user.uname}}</div>
      </div>
      <div class="text">{{item.content}}</div>
      <div class="detailStyle">
        <div>{{filters(item.created)}}</div>
        <div class="info">{{item.style}}</div>
      </div>
      <div v-if="item.images !== 0" class="images">
        <img v-for="(img,index) in item.images" :src="img" alt :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    filters(value) {
      //1 将时间戳转成Date对象
      const date = new Date(value * 1000);
      //2 将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>

<style scoped>
.detailComment {
  padding: 20px;
}
.line {
  margin-top: 50px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.1);
}
.commentTop {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 20px;
}
.avatar {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}
.avatar img {
  width: 70px;
  height: 70px;
  border-radius: 35px;
}
.avatar .uname {
  margin-left: 20px;
  font-weight: 600;
}
.text {
  margin-top: 20px;
}
.detailStyle{
  display: flex;
  margin-top: 10px;

}
.info {
  margin-left: 10px;
}
.images {
  width: 100%;
  height: 129px;
  overflow: hidden;
}
.images img {
  width: 100px;
  height: 100px;
  margin-right: 5px;
  margin-top: 10px;
}
</style>