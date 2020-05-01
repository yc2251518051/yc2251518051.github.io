console.log("轮播图插件加载好使嗷~");
// 向左箭头获取
var $left=document.querySelector(".left");
// 向右箭头获取
var $right=document.querySelector(".right");
// 图片容器的获取
var $pics=document.querySelector("#pics");
// 轮播图整体部分的获取
var $carousel=document.querySelector("#carousel");
// 小圆点的获取
var $smallcircle=document.querySelectorAll(".circle span");
var width=520;
var index=0;
// 左箭头
$left.onclick=function(){
  if(index==0) index=12;
  else
  index--;
  var nowLeft=index*width;
  $pics.style.left=-nowLeft+"px";
  console.log("箭头好使嗷~"); 
  // console.log(index);
// console.log(index*width);
}
// 右箭头
$right.onclick=function(){
  if(index==12) index=0;
  else
  index++;
  var nowLeft=index*width;
  $pics.style.left=-nowLeft+"px";
  console.log("自动播放好使嗷~");
  // console.log(index);
  // console.log(index*width);
}
// 自动播放
var timer =null;
function autoPlay(){
 timer=setInterval(function(){
   $right.click();
 },5000);
}
autoPlay();
// 鼠标划入暂停播放
$carousel.onmouseenter=function(){
  clearInterval(timer);
}
// 鼠标划出继续播放
$carousel.onmouseleave=function(){
  autoPlay();
}


