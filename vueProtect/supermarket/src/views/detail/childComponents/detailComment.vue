<template>

  <div 
  class="detailComment"
  v-if="comments.list !== undefined && comments.list.length"
  >
    <div class="commentTitle">
      <span>用户评价({{comments.cRate}})</span>
      <span class ="more">更多</span>
    </div>
      <div 
      class="commentContent">
        <div 
        class="commentUser"
        v-if="Object.keys(comments.list[0].user).length"
        >
          <img :src="comments.list[0].user.avatar" alt="">
          <span>{{comments.list[0].user.uname}}</span>
        </div>
        <div class="commentContent">
          <div>
            {{comments.list[0].content}}
          </div>
          <div class="goodsCommentInfo">
            <span class = "created">{{comments.list[0].created | showDate}}</span>
            <span class = "commentsParams">{{comments.list[0].style}}</span>
          </div>
          <div class="imgs">
            <img v-for="(pic,i) in comments.list[0].images" :src="pic"  :key = "i" alt="">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {format} from "@/common/utils.js"
export default {
  name: "detailComment",
  props: {
    comments: {
      type: Object,
      require:true
    }
  },
  data() {
    return {};
  },
  filters:{
    showDate: function(value){
      let date = new Date(value * 1000);
      return format(date,'yyyy-MM-dd hh:mm')
    }
  }
};
</script>

<style scoped>
.detailComment{
  box-shadow:0px 4px #eee;
}
.commentTitle {
  height: 49px;
  line-height: 49px;
  box-shadow: 0px 2px #eee;
}
.more {
  float: right;
  margin-right: 16px;
}
.commentUser{
  height:50px;
}
.commentUser img{
  width:50px;
  height:50px;
  border-radius:50%;
  padding:5px;
  float:left;
}
.commentUser span{
  display:block;
  height: 100%;
  line-height: 50px;
}
.commentContent{
  margin-top:5px;
  font-size:14px;
}
.commentContent div{
  margin: 5px;
}
.goodsCommentInfo{
  color:#888;
  height:30px;
  line-height:30px;
}
.goodsCommentInfo .created{
  margin-right:5px;
}
.imgs{
  height:100px;
}
.imgs img{
  width:70px;
  height:70px;
  margin:3px;
}
</style>
