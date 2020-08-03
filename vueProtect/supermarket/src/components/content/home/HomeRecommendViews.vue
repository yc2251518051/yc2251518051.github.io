<template>
  <div class="recommend">
    <div v-for = "(item,i) in recommends" :key = "i" class = "recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props:{
    recommends:{
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
.recommend{
  display: flex;
  justify-content: center;
  align-items: center;
}
.recommendItem{
  flex:1;
  margin-top:10px;
  margin-bottom: 30px;
  border-bottom: 10px solid #eee;
}
.recommendItem img{
  width:80px;
  height:80px;
  margin-bottom:10px;
}
.recommendItem a div{
font-size:14px;
text-align: center;
}
</style>
