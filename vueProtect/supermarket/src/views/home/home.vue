<template>
  <div id="home">
    <navBar class="navBar">
      <div slot="center">购物街</div>
    </navBar>
    <swiper :banners=banners>
    </swiper>
  </div>
</template>
<script>
import navBar from "@/components/common/navbar/navBar";
import { getHomeMultidata } from "@/network/home.js";
import swiper from "@/components/common/swiper/swiper"
import swiperItem from "@/components/common/swiper/swiperItem"
export default {
  name: "home",
  data() {
    return {
      banners: []
    };
  },
  components: {
    navBar,
    swiper,
    swiperItem
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
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
