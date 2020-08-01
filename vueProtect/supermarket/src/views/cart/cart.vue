<template>
  <div id="cart">
    <navBar class="navBar">
      <div slot = "center">购物车</div>
    </navBar>
  </div>
</template>
<script>
import navBar from '@/components/common/navbar/navBar'
export default {
  name: "shopCart",
  components:{
    navBar
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
