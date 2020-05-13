var add =document.getElementsByClassName('addButton')[0];
var sub =document.getElementsByClassName('subButton')[0];
var Bt = document.getElementsByClassName('fullButton')[0];
var leftContent = document.getElementsByClassName('leftPic')[0];
leftContent.crossOrigin = "*";  
var rightContent = document.getElementsByClassName('rightPic')[0];
rightContent.crossOrigin = "*"; 
var cutPic = document.getElementsByClassName('cutPic')[0];
// var leftContent = document.getElementsByClassName('leftContent')[0];
// var rightContent = document.getElementsByClassName('rightContent')[0];
var wrapper =[];
wrapper[0] = document.getElementsByClassName('wrapper')[0];
var index = 1;
var Elements,
    Element,
    text,
    i;
    var type = 'png';
//获取一张纸的所有节点
(   function (){wrapper[1] = document.createElement('div');
wrapper[1].setAttribute('class','wrapper');
Elements = wrapper[0].childNodes;  
for(i = 0;i < Elements.length;i ++){
Element =Elements[i].cloneNode(true);
    wrapper[1].appendChild(Element);
  }
document.body.appendChild(wrapper[1]);
wrapper[0].style.display ="none";
})
  //加纸张
add.onclick=function(){
  index ++;
  wrapper[index] = document.createElement('div');
  wrapper[index].setAttribute('class','wrapper');
  Elements = wrapper[0].childNodes;
  for(i = 0;i < Elements.length;i ++){
    (function(i){Element =Elements[i].cloneNode(true);
      wrapper[index].appendChild(Element);}(i))
    }
  document.body.appendChild(wrapper[index]);
  console.log(wrapper);
}
//减纸张
sub.onclick=function(){
  if(index == 1){
    console.log(wrapper);}
  else{
    document.body.removeChild(wrapper[index]);
    wrapper.pop();
    index --;
    console.log(wrapper);
    }
  }
//为左右内容框填充背景
Bt.onclick=function(){
  document.getElementById("doc").click();
}
cutPic.onclick =function(){
  window.pageYOffset = 0;
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0

  html2canvas(wrapper[0], {
    useCORS: true,
    backgroundColor:null,
}).then(canvas => { 
  let imgUri = canvas.toDataURL("image/png").replace("image/png","image/octet-stream")
  console.log(imgUri);
         canvas.id='mycanvas';
         canvas.style.display='none';
   document.body.appendChild(canvas);
   var canvas = document.getElementById("mycanvas");
   imgData = canvas.toDataURL(type);
  //  location = imgData;

  // 加工image data，替换mime type
  // imgData = imgData.replace(_fixType(type),'image/octet-stream');

 // 下载后的问题名
 var filename = '作业 .' + type;
 // download
 saveFile(imgData,filename);
});}

var saveFile = function(data, filename){
  var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  save_link.href = data;
  save_link.download = filename;

  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  save_link.dispatchEvent(event);
};
function setImagePreview() {  
var docObj=document.getElementById("doc");  
leftContent.src =  window.URL.createObjectURL(docObj.files[0]) ;
leftContent.style.width = "840px";
leftContent.style.height = "1048px";
rightContent.src =  window.URL.createObjectURL(docObj.files[0]);
rightContent.style.width = "840px";
rightContent.style.height = "1048px";
rightContent.style.float = "right";
// rightContent.style.backgroundPosition = "-420px 0px";
// var docObj=document.getElementById("doc");  
// leftContent.style.backgroundImage = "url("+ window.URL.createObjectURL(docObj.files[0]) +")";
// leftContent.style.backgroundSize = "840px 1048px";
// Bt.style.display="none";
// rightContent.style.backgroundImage = "url("+ window.URL.createObjectURL(docObj.files[0]) +")";
// rightContent.style.backgroundSize = "840px 1048px";
// rightContent.style.backgroundPosition = "-420px 0px";
// html2canvas(wrapper[0]).then(canvas => {
//   document.body.appendChild(canvas)
// });
}

// html2canvas(document.getElementById("box"),{useCORS: true}).then(function(canvas) {
//   console.log("666");
//   url=canvas.toDataURL();
//   a=document.querySelector('#a');
//   a.href=url;
// });
