<template>
  <div class="detailSwiper">
    <swiper :bannersNum = "pics.length">
      <swiperItem v-for ="(item,i) in pics" :key = "i" :bannersNum = "pics.length">
        <img :src="item" alt="">
      </swiperItem>
    </swiper>
  </div>
</template>

<script>
import swiper from "@/components/common/swiper/swiper"
import swiperItem from "@/components/common/swiper/swiperItem"
export default {
  name: 'detailSwiper',
  props:{
    pics:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
      
    }
  },
  components:{
    swiper,
    swiperItem
  }
}
</script>

<style scoped>
.detailSwiper{
  height:300px;
}
</style>
