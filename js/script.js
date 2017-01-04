/*意思是：加载完html后，再加载js*/
window.onload=function(){
  var page1=document.getElementById("page1");
  var page2=document.getElementById("page2");
  var page3=document.getElementById("page3");

  var img_first=document.getElementById("img_first");
  var audio=document.getElementsByTagName("audio")[0];

  //当音乐播放完成后，删除动画;ended是audio的api;false指事件以冒泡机制执行
  audio.addEventListener("ended",function(event){
  	img_first.setAttribute("class","");
  },false); 

  /*控制音乐的播放与暂停：手机端不是click,且click有300ms的延迟，应设置监听事件
  img_first.onclick=function(){
  	如果是暂停的，使其播放，并增加动画
  	if(audio.paused){
  		audio.play();
  		//1 缺点：暂停后，图片回到原位置
  		this.setAttribute("class","play");
  		/*2 缺点：兼容性不好，部分android iphone实现不了
  		/this.style.animationPlayState="running";
  		this.style.webkitAnimationPlayState="running";
  		//3 不知道为什么实现不了  this.addClass("play");
  	}
  	//如果是播放的，使其暂停，并删除动画
  	else{
  		audio.pause();
  		this.setAttribute("class","");
  		//this.style.animationPlayState="paused";
  		//this.removeClass("play");
  	}
  }*/
 //设置监听事件，且监听的事touchstart事件
  img_first.addEventListener("touchstart",function(event){
  	if(audio.paused){
  		audio.play();
  		//1 缺点：暂停后，图片回到原位置
  		this.setAttribute("class","play");
  		/*2 缺点：兼容性不好，部分android iphone实现不了
  		/this.style.animationPlayState="running";
  		this.style.webkitAnimationPlayState="running";*/
  		//3 不知道为什么实现不了  this.addClass("play");
  	}
  	//如果是播放的，使其暂停，并删除动画
  	else{
  		audio.pause();
  		this.setAttribute("class","");}
  },false);

  //页面的跳转操作
  page1.addEventListener("touchstart",function(event){
  	page1.style.display="none";
  	page2.style.display="block";
  	page3.style.display="block";
  	page3.style.top="100%";

  	/*5s后page2消失，将fadeOut属性加上就会消失；page3出现，*/
  	setTimeout(function(){
  		page2.setAttribute("class","page fadeOut");
  		page3.setAttribute("class","page fadeIn");
  	},5000);
  },false);
};