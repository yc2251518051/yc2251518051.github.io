<template>
  <!-- <div
    class="swiperItem"
  > -->
  <div
    class="swiperItem"
    :style="{
      width:1/bannersNum*100 + '%'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "swiperItem",
  props: {
    bannersNum: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.swiperItem {
  float: left;
  width:25%;
  height: 100%;
}
.swiperItem img {
  width: 100%;
  height: 100%;
}
</style>
