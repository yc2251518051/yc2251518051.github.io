<template>
  <div class="scroll" ref="scrollWrapper">
    <div class = "content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import scroll from "better-scroll"
import {debounce} from "@/common/utils.js"
export default {
  name: 'scroll',
  data () {
    return {
    bscroll:null,
    }
  },
  methods:{
    //返回顶部
    scrollTo(x,y,time=300){
      this.bscroll.scrollTo(x,y,time);
    },
    refresh(){
      this.bscroll.refresh()
    },
  },
  mounted(){
    // 创建scroll对象
    this.bscroll = new scroll(this.$refs.scrollWrapper,{
      probeType: 3,
      pullUpLoad:{
        threshold: 50
      },
      click:true,
      mouseWheel: true,//开启鼠标滚轮
      disableMouse: false,//启用鼠标拖动
      disableTouch: false//启用手指触摸
    });


    //实时监听滑动的距离
    this.bscroll.on('scroll',position =>{
      this.$emit('scroll',position)
    })

    //实现上拉加载更多
    this.bscroll.on('pullingUp',()=>{
    this.$emit('pullingUp');
    setTimeout(()=>{
    this.bscroll.finishPullUp();
    },2000)
    }
    )

    //定义方法让scroll刷新高度
    let scrollLoad = debounce(this.refresh,50);
    this.$bus.$on('imgLoad',()=>{
      scrollLoad()
    })
  }
}
</script>

<style scoped>
.scroll{
  height:calc(100% - 93px);
  /* margin-top:44px; */
  /* height:calc(100% - 44px); */
  /* position:absolute; */
  /* top:44px; */
  /* bottom:49px; */
  /* left:0px; */
  /* right:0px; */
  overflow: hidden;
}
</style>


