<template>
  <div class="listItem">
    <div class = "list" v-for = "(item,i) in items " :key = "i">
      <img class = "itemIcon" :src="item.icon" alt="">
      <div class = "itemTitle">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props:{
    items:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.listItem{
  width:100%;
  margin-top:12px;
}
.list{
  width:100%;
  margin-bottom:1px;
  height:44px;
  line-height: 44px;
  background: #fff;
}
.itemIcon{
  width:18px;
  height:18px;
  margin:10px;
  float:left;
}
</style>
