/*
* @Author: Administrator
* @Date:   2019-05-21 20:42:03
* @Last Modified by:   Administrator
* @Last Modified time: 2019-05-23 20:04:40
*/
//轮播图特效//
var md=document.getElementById('md');
var mdivs=md.getElementsByTagName("div");
var len=md.children.length;
var j=0;
var dh;
window.onload =function (){
dh=setInterval(timeId, 1000);

mdivs[0].style.display='block';
}

md.onmousemove=function (){
	clearInterval(dh);
}

md.onmouseout=function (){
	dh=setInterval(timeId, 1000);
}



function timeId(){
	for(var i =0; i<len;i++){
		mdivs[i].style.display='none';
	}
	if(j>=len-1){
		j=0;
	}else {
		j++;
	}
	mdivs[j].style.display='block';
}
//end//
//线条滚动效果//
var v3=document.getElementById('v3');
var ul=v3.children[0];
var hrd=document.getElementById('hrd');

setInterval(function (){
for(var i=0;i<ul.children.length-1;i++){
	var li=ul.children[i];
	li.onmouseover = function (){
		var left=this.offsetLeft;
			hrd.style.left = left-40+'px';
			
	    }
    }
}, 30);
