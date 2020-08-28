<template>
  <div id="mainTabBar">
    <keep-alive exclude = "detail">
      <router-view></router-view>
    </keep-alive>
    <tabBar>
      <!-- 可以传path即路由默认路径，以及ActiveColor是活跃时的字体颜色 -->
      <tabbarItem path="/home">
        <img
          slot='itemImg'
          src="@/assets/images/tabbar/home.svg"
          alt=""
        >
        <img
          slot='itemImgActive'
          src="@/assets/images/tabbar/home_active.svg"
          alt=""
        >
        <div slot='itemText'>首页</div>
      </tabbarItem>
      <tabbarItem path="/category">
        <img
          slot='itemImg'
          src="@/assets/images/tabbar/category.svg"
          alt=""
        >
        <img
          slot='itemImgActive'
          src="@/assets/images/tabbar/category_active.svg"
          alt=""
        >
        <div slot='itemText'>分类</div>
      </tabbarItem>
      <tabbarItem path="/cart">
        <img
          slot='itemImg'
          src="@/assets/images/tabbar/shopcart.svg"
          alt=""
        >
        <img
          slot='itemImgActive'
          src="@/assets/images/tabbar/shopcart_active.svg"
          alt=""
        >
        <div slot='itemText'>购物车</div>
      </tabbarItem>
      <tabbarItem path="/profile">
        <img
          slot='itemImg'
          src="@/assets/images/tabbar/profile.svg"
          alt=""
        >
        <img
          slot='itemImgActive'
          src="@/assets/images/tabbar/profile_active.svg"
          alt=""
        >
        <div slot='itemText'>我的</div>
      </tabbarItem>
    </tabBar>
  </div>
</template>
<script>
import tabBar from "@/components/common/tabbar/tabbar";
import tabbarItem from "@/components/common/tabbar/tabbarItem";
// import tabbar from "../tabbar/tabbar.vue";
// import tabbarItem from "../tabbar/tabbarItem.vue";
export default {
  name: 'mainTabBar',
  components: {
    tabBar,
    tabbarItem
  }
};
</script>
<style scoped>
</style>
