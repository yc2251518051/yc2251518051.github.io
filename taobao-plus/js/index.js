console.log("轮播图插件加载好使嗷~");
// 向左箭头获取
var $left=document.querySelector(".img1Box .leftBtn");
// 向右箭头获取
var $right=document.querySelector(".img1Box .rightBtn");
// 图片容器的获取
var $pics=document.querySelector(".img1Box ul");
// 轮播图整体部分的获取
var $carousel=document.querySelector(".img1Box .pic");
// 小圆点的获取
var $smallcircle=document.querySelectorAll(".img1Box .circle span");
var width=520;
var index=0;
// 左箭头
$left.onclick=function(){
  if(index==0) index=4;
  else
  index--;
  var nowLeft=index*width;
  $pics.style.left=-nowLeft+"px";
  circlechange();
  console.log("箭头好使嗷~"); 
  // console.log(index);
// console.log(index*width);
}
// 右箭头
$right.onclick=function(){
  if(index==4) index=0;
  else
  index++;
  var nowLeft=index*width;
  $pics.style.left=-nowLeft+"px";
  circlechange();
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

// 小圆点随图像变化而变化
function circlechange(){
  // console.log($smallcircle.length);
  for(var i=0; i<$smallcircle.length;i++){
    $smallcircle[i].className="";
  }
  $smallcircle[index].className="active";
  }
// 小圆点控制图片轮播
  for(var i=0;i<$smallcircle.length;i++){
(function(i){
    $smallcircle[i].onclick=function(){
                   index = i;  
                $pics.style.left = -index*width+"px";
           circlechange();
           console.log("小圆点好使嗷~");
    }
  })(i);
    };
 
