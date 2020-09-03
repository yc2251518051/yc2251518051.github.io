<template>
  <div class="tabControl">
    <div
      v-for="(item,i) in titles"
      :key="i"
      class="tabControlItem"
      :class="{
      active:i === activeIndex
      }"
      @click = "itemClick(i)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      activeIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      required: true
    }
  },
  methods:{
    itemClick(i){
      this.activeIndex = i;
      this.$emit('tabClick',i)
    }
  }
};
</script>

<style scoped>
.tabControl {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background: #fff;
}
.tabControlItem {
  flex: 1;
}
.active {
  color: rgb(255, 87, 119);
}
.active span {
  border-bottom: 2px solid rgb(255, 87, 119);
}
</style>
