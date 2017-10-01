/*index.js*/

/*----------------------------------------------------------下拉菜单效果*/
var li1 = document.getElementById("li1");
li1.onmouseover = function(){
	/*鼠标进去把类名改成toggleli on*/
	this.className = "toggleli on";
}
li1.onmouseout = function(){
	/*鼠标出来把类名改成toggleli*/
	this.className = "toggleli";
}

var haha = document.getElementById("haha");
var liss = haha.getElementsByTagName("li");
for (var i = 0; i < liss.length; i++) {
	liss[i].onmousemove = function(){
		//添加一个on类 变成categroy on
		this.className = "toggleli on";
	}
	liss[i].onmouseout = function(){
		//添加一个on类 变成categroy
		this.className = "toggleli";
	}
}

/*-------------------------------------------------------------------下拉菜单效果end*/

/*------------------------------------------------------------------nav导航菜单*/
var cateitemlist = document.getElementById("cateitemlist");
var lis = cateitemlist.getElementsByTagName("li");
//console.info(lis);   检查有没有取到id和name
for (var i = 0; i < lis.length; i++) {
	lis[i].onmousemove = function(){
		//添加一个on类 变成categroy on
		this.className = "cateitem on";
	}
	lis[i].onmouseout = function(){
		//添加一个on类 变成categroy
		this.className = "cateitem";
	}
}
/*-----------------------------------------------------------------nav导航菜单end*/






/*选项卡效果----------------------------------------------------------------links部分*/
var linknav = document.getElementById("linknav");
var lis = linknav.getElementsByTagName("li");
var divs = linknav.getElementsByTagName("div");
console.info(lis);
/*给每一个li添加事件响应，点击时，显示对应的那个div*/
for (var i=0;i<lis.length;i++) {
	lis[i].index = i;                /* index代指lis数组下标数字*/
	lis[i].onclick = function () {
//		console.info(i);    测试
		//让对应的div显示
		//1把所有div隐藏
		for (var i = 0; i < divs.length; i++){
			divs[i].style.display = "none";
		}
		//2把当前div显示
		divs[ this.index ].style.display = "block";                   /*this指调用函数的对象*/
		//index表示的是对应的索引位置       lis[i].index=i循环把i的值赋值给li的index；
		//this.index表示当前点击的li的索引值             divs[this.index]表示对应的DIV	
	}
}
/*----------------------------------------------------------------links部分end*/


/*-----------------------------------------------------------------轮播图*/	

















}
/*-----------------------------------------------------------------轮播图*/	
