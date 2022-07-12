<template>
  <div v-if="Object.keys(paramInfo).length !== 0">
    <div class="paramBox">
      <table class="paramTable" v-for="(table,index) in paramInfo.sizes" :key="index">
        <tr v-for="(tr,index) in table" :key="index">
          <td v-for="(td,index) in tr" :key="index">{{td}}</td>
        </tr>
      </table>
    </div>
    <div class="paramInfoBox">
      <table>
        <tr v-for="(item,index) in paramInfo.info" :key="index">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div v-if="paramInfo.image.length !== 0">
      <img v-for="item in paramInfo.image" :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.paramBox{
  padding: 20px 15px;
  font-size: 14px;
}
.paramTable {
  width: 100%;
  border-collapse: collapse;
}
.paramTable tr{
  height: 42px;
}
.paramTable tr td{
  border-bottom: 1px solid rgba(0, 0, 0, 0.3)
}
.paramInfoBox{
  padding: 20px 15px;
}
.paramInfoBox table{
  width: 100%;
  border-collapse: collapse;
}
.paramInfoBox tr {
  height: 55px;
}
.paramInfoBox tr td{
  border-bottom: 1px solid rgba(0, 0, 0, 0.3)
}
.paramInfoBox .key{
  width: 110px;
}
.paramInfoBox .value{
  color: var(--color-tint);
}
</style>