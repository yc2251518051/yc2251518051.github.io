<template>
  <div class="detailDecs" v-if = "Object.keys(decs).length !== 0">
    <div class="title">
      {{decs.title}}
    </div>
    <div class="price">
      <span class="newPrice">{{decs.newPrice + ` `}}</span>
      <span class="oldPrice">{{decs.oldPrice + `   `}}</span>
      <span class="discount">{{decs.discount}}</span>
    </div>
    <div
      class="columns"
      v-if='decs.columns'
    >
      <span class="sales">{{decs.columns[0]}}</span>
      <span class="collect">{{decs.columns[1]}}</span>
      <span class="sendOut">{{decs.services[decs.services.length-1].name}}</span>
    </div>
    <div
      class="services"
      v-if="decs.services"
    >
      <span>
        <img
          :src="decs.services[0].icon"
          alt=""
        >
        <span>{{decs.services[0].name}}</span>
      </span>
      <span>
        <img
          :src="decs.services[1].icon"
          alt=""
        >
        <span>{{decs.services[1].name}}</span>
      </span>
      <span> <img
          :src="decs.services[2].icon"
          alt=""
        >
        <span>{{decs.services[2].name}}</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailDecs",
  props: {
    decs: {
      type: Object,
      require: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(decs)
    // console.log(this.decs)
    // this.decs = decs;
    // console.log(decs)
  }
};
</script>

<style scoped>
.detailDecs {
  font-size: 14px;
}
.title {
  font-size: 17px;
  color: #000;
  font-weight: bold;
}
.newPrice {
  font-size: 25px;
  color: rgb(255, 87, 119);
}
.oldPrice {
  text-decoration: line-through;
}
.discount {
  display: inline-block;
  /* width: 50px; */
  height: 18px;
  line-height: 18px;
  text-align: center;
  background: rgb(255, 87, 119);
  color: #fff;
  border-radius: 9px;
}
.columns {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #dfdfdf;
  display: flex;
  text-align: center;
}
.columns span {
  flex: 1;
}
.services {
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 4px solid #dfdfdf;
  text-align: center;
}
.services > span {
  flex: 1;
}
.services img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
  /* display:inline-block; */
}
/* .servicesIcon::before{
  content:' ';
  display: inline-block;
  width: 14px;
  height:14px;
  background:red;
} */
</style>
