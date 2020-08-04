<template>
  <div class="goodsList">
    <goodsListItem v-for="(item,i) in goodsList" :key="i" :goods="item"></goodsListItem>
  </div>
</template>

<script>
import goodsListItem from "@/components/content/home/GoodsList/goodsListItem"
export default {
  name: 'goodsList',
  props:{
  goodsList:{
    type:Array,
    require:true
    }
  },
  data () {
    return {
      
    }
  },
  components:{
    goodsListItem
  }
}
</script>

<style scoped>
.goodsList{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:2px;
}
</style>
