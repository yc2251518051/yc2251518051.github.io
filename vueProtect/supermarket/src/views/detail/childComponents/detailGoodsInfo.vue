<template>
  <div
    class="detailGoodsInfo"
    v-if="Object.keys(goodsInfo).length !== 0"
  >
    <div class="before"> </div>
    <div class="goodsInfoDesc">
      {{goodsInfo.desc}}
    </div>
    <div class="after"></div>
    <div class="goodsInfoImg">
      <div>
        {{goodsInfo.detailImage[0].key}}
      </div>
      <img
        v-for="(item,i) in goodsInfo.detailImage[0].list"
        :src="item"
        alt=""
        :key="i"
        @load="finishImg"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      imgCount:0
    };
  },
  methods:{
    finishImg(){
        this.$emit('finishImg');
  }
}
}
</script>

<style scoped>
.before {
  margin-left: 5%;
  width: 30%;
  height: 1px;
  background: #333;
  float: left;
}
.before::before {
  content: "";
  display: block;
  width: 5px;
  transform: translateY(-100%);
  height: 5px;
  background: #000;
}
.after {
  margin-right: 5%;
  width: 30%;
  height: 1px;
  float: right;
  background: #333;
}
.after::before {
  content: "";
  display: block;
  float: right;
  margin-top: 1px;
  width: 5px;
  height: 5px;
  background: #000;
}
.goodsInfoImg img {
  width: 100%;
}
</style>
