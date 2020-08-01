<template>
  <div class='tabbarItem' @click = "itemClick">
    <slot
      v-if="!isActive"
      name='itemImg'
    ></slot>
    <slot
      v-else
      name='itemImgActive'
    ></slot>
    <div :style="activeStyle">
      <slot name='itemText'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbarItem",
  props:{
    path:{
       type:String,
      //  default:'/home'
    },
    ActiveColor:{
      type:String,
      default:'rgb(255,87,119)'
    }
  },
  // data() {
  //   return {
  //   };
  // },
  computed:{
    isActive(){
      //看看当前活跃的路由路径是否为path以此判断是否让item活跃
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive?{color:this.ActiveColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
};
</script>
<style scoped>
.tabbarItem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbarItem img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: rgb(255,87,119);
}
</style>
