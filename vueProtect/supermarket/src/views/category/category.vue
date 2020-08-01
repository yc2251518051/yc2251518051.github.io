<template>
  <div id="category">
    <navBar class="navBar">
      <div slot = "center">商品分类</div>
    </navBar>
  </div>
</template>
<script>
import navBar from '@/components/common/navbar/navBar'
// import navBar from '@/components/common/navbar/navBar'
export default {
  name: "category",
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
