<template>
  <div
    class="swiper"
    ref="swiper"
    @mouseenter="autoStop"
    @mouseleave="autoStart"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div
      class="swiperWraper"
      ref="swiperWrapper"
      :style="{
      width:bannersNum*100 + '%',
      marginLeft:-100*index + '%',
      }"
    >
    <slot></slot>
    </div>
    <div class="swiperIndicator">
      <div
        v-for="(item,i) in bannersNum"
        :key="i"
        :class="{
        active: index === i
        }"
        @click="index=i"
      ></div>
    </div>
  </div>
</template>

<script>
import swiperItem from "./swiperItem";
export default {
  name: "swiper",
  props: {
    bannersNum: {
      type: Number,
      required: true
    },
    scrollSpeed:{
      type:Number,
      default: 2000
    },
    moveRadio:{
      type:Number,
      default:25
    }
  },
  data() {
    return {
      index: 0, //当前显示的图片索引值
      timer: null,
      swiperBanners: this.banners,
      isFinishImg:false,
      // scrolling: false //当前是否滚动
    };
  },
  components: {
    swiperItem
  },
  methods: {
    // finishImg(){
    //   this.$emit('finishImg')
    // },
    autoStart() {
      this.timer = setInterval(() => {
        this.index = (this.index + 1) % this.bannersNum;
      },this.scrollSpeed);
    },

    autoStop() {
      clearInterval(this.timer);
      this.timer = null;
    },

    touchStart: function(e) {
      // 1.如果正在滚动, 不可以拖动
      // if (this.scrolling) return;

      // 2.停止定时器
      this.autoStop();

      // 3.保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },

    touchMove: function(e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance =
        ((this.currentX - this.startX) / this.$refs.swiper.offsetWidth) * 100;
      let currentPosition = this.index * -100;
      let moveDistance = this.distance + currentPosition;
      // 2.设置当前的位置
      this.$refs.swiperWrapper.style.marginLeft = moveDistance + "%";
    },

    touchEnd: function(e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance);

      // 2.判断最终的距离
      if (this.distance === 0) {
        return;
      } else if (this.distance > 0 && currentMove > this.moveRadio) {
        // this.scrolling = true;
        // 右边移动超过0.5
        this.index =
          (this.index + this.bannersNum - 1) % this.bannersNum;
        // this.scrolling = false;
      } else if (this.distance < 0 && currentMove > this.moveRadio) {
        // 向左移动超过0.5
        this.index = (this.index + 1) % this.bannersNum;
      } else {
        // this.scrolling = true;
        this.$refs.swiperWrapper.style.marginLeft = this.index * -100 + "%";
        // this.scrolling = false;
      }

      // 3.移动完成后重新开启定时器
      this.autoStart();
    },
    // finishImg(){
    //   // if(!this.isFinishImg){
    //   this.$emit('finishImg');
    //   // this.isFinishImg=true
    //   // }
    // }
  },
  mounted() {
    this.autoStart();
  }
};
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;  
}
.swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.swiperWraper {
  height: 100%;
  transition: 0.5s;
}
.swiperIndicator {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 13px;
  border-radius: 10px;
  /* width: 20%; */
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.3);
}
.swiperIndicator div {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
div.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
