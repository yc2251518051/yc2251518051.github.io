<template>
  <div id="home">
    <navBar class="navBar">
      <div slot="center">购物街</div>
    </navBar>
    <swiper :banners=banners>
    </swiper>
    <recommend :recommends="recommend"></recommend>
  </div>
</template>
<script>
import navBar from "@/components/common/navbar/navBar";
import { getHomeMultidata } from "@/network/home.js";
import swiper from "@/components/common/swiper/swiper";
import recommend from "@/components/content/home/HomeRecommendViews";
export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommend:[]
    };
  },
  components: {
    navBar,
    swiper,
    recommend
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      this.recommend = res.data.recommend.list;
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
