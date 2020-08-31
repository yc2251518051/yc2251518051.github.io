<template>
  <div class="detail">
    <navBar ref = "detailNav" @detailNavBarClick = "itemClick"></navBar>
    <toast :messages = "this.message" :delay = "3000"></toast>
    <!-- <scroll ref = "detailScroll" @scroll = "getDetailposition"> -->
    <scroll 
    ref = "detailScroll" 
    @scroll="detailScroll">
    <swiper :pics = "this.topImages"></swiper>
    <decs :decs = "this.decs"></decs>
    <shopInfo :shopInfo = "this.shopInfo"></shopInfo>
    <goodsInfo :goodsInfo = "this.detailInfo" @finishImg = "scrollRefresh"></goodsInfo>
    <goodsParams :goodsParams = "this.goodsParam" ref = "detailParams"></goodsParams>
    <comment :comments = "this.comment" ref = "detailComment"></comment>
    <recommends :goodsList="this.recommends.list" ref = "detailRecommends"></recommends>
    </scroll>
    <backTop
      @click.native="backTop"
      v-show="this.isShowBackTop"
    >
      <img
        src="@/assets/images/home/top.png"
        alt=""
      >
    </backTop>
    <bottomBar @addToCart = "addToCart"></bottomBar>
  </div>
</template>

<script>
import navBar from "@/views/detail/childComponents/detailNavBar"
import swiper from "@/views/detail/childComponents/detailSwiper"
import decs from "@/views/detail/childComponents/detailDecs"
import shopInfo from "@/views/detail/childComponents/detailShopInfo"
import goodsInfo from "@/views/detail/childComponents/detailGoodsInfo"
import goodsParams from "@/views/detail/childComponents/detailGoodsParams"
import comment from "@/views/detail/childComponents/detailComment"
import bottomBar from "@/views/detail/childComponents/detailBottomBar"


import scroll from "@/components/common/scroll/scroll"
import toast from "@/components/common/toast/toast"

import recommends from "@/components/content/home/GoodsList/goodsList"

import {getDetailData,getRecommend,Decs,Shop,GoodsParam} from "@/network/detail.js"
import {backTopMixin} from "@/common/mixin.js"

import {debounce} from "@/common/utils.js"
export default {
  name: 'detail',
  data () {
    return {
      iid:null,
      topImages:[],
      decs:{},
      shopInfo:{},
      detailInfo:{},
      goodsParam:{},
      comment:{},
      recommends:{},
      themeTopY:[],
      getThemeTop:null,
      currentIndex:null,
      message:''
    }
  },
  mixins:[backTopMixin],
  components:{
    navBar,
    swiper,
    decs,
    shopInfo,
    goodsInfo,
    goodsParams,
    comment,
    bottomBar,
    scroll,
    toast,
    recommends
  },
  methods:{
    scrollRefresh(){
      this.$refs.detailScroll.bscroll.refresh();
      this.getThemeTop();
    },
    itemClick(i){
      this.$refs.detailScroll.bscroll.scrollTo(0,-this.themeTopY[i],100);
    },
    detailScroll(position){
      let themeTopY = -position.y;
      if(themeTopY >= 1000){
        this.isShowBackTop = true;
      }else{
        this.isShowBackTop = false;
      }
      // // 普通做法
      // for(let i = 0; i< this.themeTopY.length; i ++){
      // if(this.currentIndex !== i &&( i< this.themeTopY.length -1 && themeTopY>=this.themeTopY[i]&&themeTopY<this.themeTopY[i+1])||(i === this.themeTopY.length -1 && themeTopY>=this.themeTopY[i])){
      //   this.currentIndex = i;
      //   this.$refs.detailNav.currentIndex = i;
      // }
      // }
      //Hack做法
      for(let i = 0; i< this.themeTopY.length - 1; i ++){
      if(this.currentIndex !== i && themeTopY>=this.themeTopY[i]&&themeTopY<this.themeTopY[i+1]){
        this.currentIndex = i;
        this.$refs.detailNav.currentIndex = i;
      }
      }
    },
    addToCart(){
      let protect = {}
      protect.iid = this.iid;
      protect.imgURL = this.topImages[0];
      protect.title = this.decs.title;
      protect.desc = this.decs.desc;
      protect.newPrice = this.decs.nowPrice;
      protect.checked = true;
      // this.$store.commit('addCart',protect)
      this.$store.dispatch('addToCart',protect).then(res =>{
        // this.message = '1231'
        this.message = res;
        // console.log(res)
      })
    },
    backTop(){
      this.$refs.detailScroll.scrollTo(0, -44);
    }
  },
  created(){
    //将商品id进行保存
      this.iid = this.$route.query.iid;
    //请求评论信息及商品信息
      getDetailData(this.iid).then(res =>{
        // console.log(res)
        //获取轮播图数据
        this.topImages = res.result.itemInfo.topImages;

        //获取商品描述的信息
        this.decs = new Decs(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
        // console.log(this.decs)

        //获取商家信息
        this.shopInfo = new Shop(res.result.shopInfo);

        //获取商品信息
        this.detailInfo = res.result.detailInfo;

        //获取商品参数信息
        this.goodsParam = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)

        //获取评论信息

        this.comment = res.result.rate;
      })
    //请求推荐商品
      getRecommend().then(res =>{
      this.recommends = res.data;
      }),

      //初始化刷新函数
      this.getThemeTop = debounce(() =>{
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.detailParams.$el.offsetTop);
      this.themeTopY.push(this.$refs.detailComment.$el.offsetTop);
      this.themeTopY.push(this.$refs.detailRecommends.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
      });
  },
  mounted(){
  }
}
</script>

<style scoped>
.detail{
  position:relative;
  z-index:9;
  background: #fff;
  height: 100vh;
}
</style>
