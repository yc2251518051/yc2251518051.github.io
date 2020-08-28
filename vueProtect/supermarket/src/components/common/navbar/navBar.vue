<template>
  <div class="navBar">
    <div class="left"><slot name = 'left'></slot></div>
    <div class="center"><slot name = 'center'></slot></div>
    <div class="right"><slot name = 'right'></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.navBar{
  position:fixed;
  left:0;
  right:0;
  top:0;
  display: flex;
  line-height:44px;
  height:44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,0.1);
}
.left,.right{
  width:60px;
  /* background: red; */
}
.center{
  flex:1;
  overflow: hidden;
  /* background:blue; */
}
</style>
