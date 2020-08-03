<template>
  <div
    class="swiperItem"
    :style="{
      width:1/banners.length*100 + '%'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "swiperItem",
  props: {
    banners: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style scope>
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
