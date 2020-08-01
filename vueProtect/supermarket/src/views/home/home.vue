<template>
  <div id="home">
    <navBar class="navBar">
      <div slot="center">购物街</div>
    </navBar>
  </div>
</template>
<script>
import navBar from "@/components/common/navbar/navBar";
import { getHomeMultidata } from "@/network/home.js";
export default {
  name: "home",
  data() {
    return {
      banners: []
    };
  },
  components: {
    navBar
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      console.log(this.banners);
    });
  }
};
</script>
<style scoped>
.navBar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}
</style>
