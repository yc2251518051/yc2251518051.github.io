<template>
  <div id="profile">
    <navBar class = "navBar">
      <div slot = "center">我的档案</div>
    </navBar>

    <login></login>

    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <listItem :items = "orderList"></listItem>
    <listItem :items = "serviceList"></listItem>
  
  </div>
</template>

<script>
// import navBar from '../../components/common/navbar/navBar'
import navBar from '@/components/common/navbar/navBar'

import login from '@/views/profile/childComponents/login'
import listItem from '@/views/profile/childComponents/listItem'

import letter from '@/assets/images/profile/letter.svg'
import cart from '@/assets/images/profile/cart.svg'
import hg from '@/assets/images/profile/hg.svg'
import jb from '@/assets/images/profile/jb.svg'
import shopBag from '@/assets/images/profile/shopBag.svg'
export default {
  name: "profile",
  data(){
    return{
      money:0,
      count:0,
      score:0,
      orderList: [
        {icon:letter, title:'我的消息'},
        {icon:jb, title:'我的积分'},
        {icon:hg,title:'会员卡'}
        ],
        serviceList: [
          {icon:cart, title:'我的购物车'},
          {icon:shopBag, title:'下载购物App'}
        ]
    }
  },
  components:{
    navBar,
    login,
    listItem
  }
};
</script>

<style>
#profile{
  background: #eee;
}
.navBar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}
 .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }

</style>