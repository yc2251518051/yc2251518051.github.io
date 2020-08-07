<template>
  <div class="goodsListItem">
    <a :href="goods.link">
      <img
        :src="goods.show.img"
        alt=""
        @load="imgLoad"
      >
      <div class="goodsInfo">
        <p>{{goods.title}}</p>
        <span class="price">{{'￥' + goods.price}}</span>
        <span class="collect">{{goods.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      required: true
    }
  },
  methods:{
    imgLoad(){
      //利用事件总线发射事件，并在scroll处进行监听，图片加载完进行scroll的高度刷新
      this.$bus.$emit('imgLoad');
    }
  }
};
</script>

<style scoped>
.goodsListItem {
  width: 48%;
  font-size: 12px;
  text-align: center;
  /* position:relative; */
}
.goodsListItem img {
  width: 100%;
  border-radius: 5px;
}
.goodsInfo p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goodsInfo .price {
  color: rgb(255, 87, 119);
  margin-right: 40px;
}
.goodsInfo .collect {
  position: relative;
}
.goodsInfo .collect::before {
  content: "";
  display: block;
  position: absolute;
  left: -16px;
  bottom: 0px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/images/home/detail_bottom.png");
  /* background: url("../../../../assets/images/home/detail_bottom.png"); */
  background-position: -42px 0px;
  background-size: cover;
}
</style>
