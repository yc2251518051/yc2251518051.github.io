<template>
  <div class="detailNavBar">
    <navBar>
      <img
        slot="left"
        class="back"
        src="@/assets/images/detail/back.svg"
        alt=""
        @click = "backClick"
      >
      <div
        slot="center"
        class="title"
      >
        <span
          v-for = "(item,i) in titles"
          :key = "i"
          class = "item"
          @click = "itemClick(i)"
          :class = "{
            active: i === currentIndex
          }"
        >{{item}}</span>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/navBar.vue";
export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  components: {
    navBar
  },
  methods:{
    backClick(){
      this.$router.go(-1)
    },
    itemClick(i){
     this.currentIndex = i,
     this.$emit('detailNavBarClick',i);
    }
  }
};
</script>

<style scoped>
.detailNavBar{
  height:44px;
  position:relative;
  z-index:9;
  background: #fff;
}
.title {
  display: flex;
}
.item {
  flex: 1;
}
.back {
  margin-top: 11px;
}
.active{
  color:rgb(255,87,119);
}
</style>
