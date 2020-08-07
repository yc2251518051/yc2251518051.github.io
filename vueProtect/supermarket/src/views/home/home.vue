<template>
  <div id="home">
    <navBar class="navBar">
      <div slot="center">购物街</div>
    </navBar>
      <tabControl
        :titles=tabControl
        @tabClick="tabClickHigh"
        v-show="isShowTabControl"
        class = "tabControlHigh"
        ref="tabControlHigh"
      ></tabControl>
    <scroll
      @pullingUp="pullingUp"
      @scroll="contentScroll"
      ref="scroll"
    >
      <swiper
        :banners=banners
        style="marginTop:44px;"
      >
      </swiper>
      <recommend :recommends="recommend"></recommend>
      <feature></feature>
      <tabControl
        :titles=tabControl
        @tabClick="tabClickLow"
        ref="tabControlLow"
      ></tabControl>
      <goodsList :goodsList="this.goods[currentGoods].list"></goodsList>
    </scroll>
    <backTop
      @click.native="backTop"
      v-show="isShowBackTop"
    >
      <img
        src="@/assets/images/home/top.png"
        alt=""
      >
    </backTop>
  </div>

</template>
<script>
import navBar from "@/components/common/navbar/navBar";
import swiper from "@/components/common/swiper/swiper";
import tabControl from "@/components/common/tabControl/tabControl";
import scroll from "@/components/common/scroll/scroll";

import recommend from "@/components/content/home/HomeRecommendViews";
import feature from "@/components/content/home/HomeFeatureView";
import goodsList from "@/components/content/home/GoodsList/goodsList";
import backTop from "@/components/content/home/backTop/backTop";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
export default {
  name: "home",
  data() {
    return {
      banners: [],
      tabControlPositionY:567,
      recommend: [],
      tabControl: ["流行", "精品", "新款"],
      goods: {
        pop: { page: 1, list: [],positionY:-611 },
        sell: { page: 1, list: [],positionY:-611  },
        new: { page: 1, list: [],positionY:-611  }
      },
      currentGoods: "pop",
      isShowBackTop: false,
      isShowTabControl: false
    };
  },
  components: {
    navBar,
    swiper,
    scroll,
    tabControl,
    recommend,
    feature,
    goodsList,
    backTop
  },
  methods: {
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.recommend = res.data.recommend.list;
        this.banners = res.data.banner.list;
      });
    },
    getHomeGoods(type) {
      getHomeGoods(type, this.goods[type].page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    //事件监听相关
    tabClickHigh(i) {
      switch (i) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "sell";
          break;
        case 2:
          this.currentGoods = "new";
          break;
      }
      this.$refs.tabControlLow.activeIndex = i;
      //点击其他选项时将scroll滑向上一次浏览的位置
      this.$refs.scroll.scrollTo(0, this.goods[this.currentGoods].positionY);
    },
    tabClickLow(i) {
      switch (i) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "sell";
          break;
        case 2:
          this.currentGoods = "new";
          break;
      }
      this.$refs.tabControlHigh.activeIndex = i;
    },
    //下拉加载更多
    pullingUp() {
      this.getHomeGoods(this.currentGoods);
    },
    //返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, -44);
    },
    //监听滚动位置
    contentScroll(position) {
      //帮助记忆当前选项滑到哪里，方便回到当前选项时复原scroll
      this.goods[this.currentGoods].positionY= position.y;
      //滚动距离超过1000，BackTop按钮显现
      this.isShowBackTop = -position.y > 1000;
      //滚动距离超过    ，tabControl吸顶
      this.isShowTabControl = -position.y > this.tabControlPositionY;
      // this.isShowTabControl = -position.y > 567;
    },
    //swiper组件加载完成 获取tabControl的位置，每次updated时调用
    tabControlUpdated(){
      this.tabControlPositionY = this.$refs.tabControlLow.$el.offsetTop
      // this.goods['pop'].positionY= -this.$refs.tabControlLow.$el.offsetTop;
      // this.goods['sell'].positionY= -this.$refs.tabControlLow.$el.offsetTop;
      // this.goods['new'].positionY= -this.$refs.tabControlLow.$el.offsetTop;
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    //2.请求推荐商品前一页
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  updated(){
    this.tabControlUpdated();
  }
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.navBar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
  z-index: 9;
}
.tabControlHigh{
  position:relative;
  z-index: 9;
}
</style>
