<template>
  <div class="detailShopInfo">
    <div class="shopTitle">
      <img
        :src="shopInfo.logo"
        class="shopLogo"
        alt=""
      >
      <h2 class="shopName">{{shopInfo.name}}</h2>
    </div>
    <div class="shopDesc">
      <div class="shopDescLeft">
        <div class="goodsCount">
          <div>{{shopInfo.goodsCount}}</div>
          <span>全部宝贝</span>
        </div>
        <div class="sells">
          <div>{{shopInfo.sells}}</div>
          <span>总销量</span>
        </div>
      </div>
      <div class="shopDescRight">
        <table>
          <tr
            class="score"
            v-for="(item,i) in shopInfo.score"
            :key="i"
          >
            <td>{{item.name}}</td>
            <td :class = "{
              high:item.isBetter,
              low:!item.isBetter,
            }">{{item.score}}</td>
            <td :class = "{
              scoreHigh:item.isBetter,
              scoreLow:!item.isBetter,
            }"><span>{{item.isBetter?'高':'低'}}</span></td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      require: true
    }
  },
  data() {
    return {};
  },
  created() {
    // console.log(ShopInfo)
  }
};
</script>

<style scoped>
.shopTitle {
  margin-top: 20px;
}
.shopLogo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
  margin-left: 8px;
  margin-right: 10px;
  border: 2px solid hsl(0, 0%, 87%);
}
.shopName {
  display: inline-block;
  line-height: 50px;
  font-size: 16px;
  font-weight: normal;
}
.shopDesc {
  margin-top: 30px;
  color: #000;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shopDescLeft {
  flex: 1;
  border-right: 1px solid #dfdfdf;
}
.sells {
  width: 50%;
  float: left;
  text-align: center;
}
.sells div {
  font-size: 18px;
  margin-bottom: 8px;
}
.goodsCount {
  width: 50%;
  float: right;
  text-align: center;
}
.goodsCount div {
  font-size: 18px;
  margin-bottom: 8px;
}
.shopDescRight {
  flex: 1;
}
.shopDescRight td{
  padding:5px;
}
.high{
  color: red;
}
.low{
  color:green;
}
.scoreHigh{
  background:red;
  color: #fff;
}
.scoreLow{
  background:green;
  color:#fff;
}
</style>
