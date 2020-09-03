<template>
  <div id="cart">
    <toast 
    :messages = "this.message"
    ></toast>
    <h2 style = "position :relative;top:44px;" v-if = "!$store.state.cartList.length">购物车空空如也~~~~</h2>
    <navBar class="navBar">
      <div slot = "center">购物车({{$store.state.cartList.length}})</div>
    </navBar>
    <scroll ref = "scroll" class ="cartScroll">
      <cartList>
        <cartListItem v-for = "(item,i) in $store.state.cartList" :key = "i" :itemInfo = "item"></cartListItem>
      </cartList>
    </scroll>
    <bottomBox 
    @goToBuy = "buy"
    ></bottomBox>
  </div>
</template>
<script>
import scroll from '@/components/common/scroll/scroll'
import navBar from '@/components/common/navbar/navBar'
import toast from "@/components/common/toast/toast"

import cartList from '@/views/cart/childComponents/cartList'
import cartListItem from '@/views/cart/childComponents/cartListItem'
import bottomBox from "@/views/cart/childComponents/cartBottomBox"
export default {
  name: "shopCart",
  components:{
    scroll,
    navBar,
    toast,
    cartList,
    cartListItem,
    bottomBox
  },
  data(){
    return {
      message:''
    }
  },
  methods:{
    buy(){
      this.message = "功能完善中.....23333"
    }
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
.cartScroll{
  margin-top:44px;
}
</style>
