<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabBar",
};
</script>
<style scoped>
#tabBar{
  display :flex;
  background: #f6f6f6;
  position:fixed;
  left:0;
  right:0;
  top:calc(100% - 49px);
  bottom:0;
  box-shadow: 0px -1px 1px rgba(100,100,100,0.1);
  height:49px;
}
</style>
