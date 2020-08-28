<template>
  <div id="cart">
    <navBar class="navBar">
      <div slot = "center">购物车({{$store.state.cartList.length}})</div>
    </navBar>
    <scroll ref = "scroll">
      <cartList>
        <cartListItem v-for = "(item,i) in $store.state.cartList" :key = "i" :itemInfo = "item"></cartListItem>
      </cartList>
    </scroll>
    <bottomBox></bottomBox>
  </div>
</template>
<script>
import scroll from '@/components/common/scroll/scroll'
import navBar from '@/components/common/navbar/navBar'

import cartList from '@/views/cart/childComponents/cartList'
import cartListItem from '@/views/cart/childComponents/cartListItem'
import bottomBox from "@/views/cart/childComponents/cartBottomBox"
export default {
  name: "shopCart",
  components:{
    scroll,
    navBar,
    cartList,
    cartListItem,
    bottomBox
  },
  activated(){
    this.$refs.scroll.bscroll.refresh();
    }
};

</script>
<style scoped>
#cart{
  height: 100vh;
}
.navBar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}
.scroll{
  height:calc(100% - 93px);
}
</style>
