<template>
  <div id="profile">
    <navBar class = "navBar">
      <div slot = "center">仿蘑菇街</div>
    </navBar>
  </div>
</template>

<script>
// import navBar from '../../components/common/navbar/navBar'
import navBar from '@/components/common/navbar/navBar'
export default {
  name: "profile",
  components:{
    navBar
  }
};
</script>

<style>
.navBar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}
</style>