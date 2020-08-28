<template>
  <div id="app">
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "@/components/content/mainTabBar";
// import mainTabBar from "./components/content/mainTabBar";
export default {
  name: 'App',
  components: {
    mainTabBar
  }
  // mounted(){
    // this.$refs.scroll.bscroll.refresh();
  // }
}
</script>

<style>
@import "./assets/css/base.css"
</style>
