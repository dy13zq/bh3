//选项卡
window.onload = function(){
 var tab_t = document.getElementById("tab_t");
 var tab_t_li = tab_t.getElementsByTagName("li");
 var tab_c = document.getElementById("tab_c");
 var tab_c_li = tab_c.getElementsByTagName("div");
 var len = tab_t_li.length;
 var i=0;
 for(i=0; i<len; i++){
  tab_t_li[i].index = i;
  tab_t_li[i].onclick = function(){
   for(i=0; i<len; i++){
    tab_t_li[i].className = '';
    tab_c_li[i].className = 'hide';
   }
   tab_t_li[this.index].className = 'act';
   tab_c_li[this.index].className = '';
  }
 }
// 弹框 关注我们
	var pic_wrap = document.getElementById("contact-wrap");
	var hover = document.getElementById("hover");
	var shud = document.getElementById("shud")
	hover.onclick = function(){
		if(pic_wrap.className.match('none')){
			pic_wrap.className = ''
		}
		else{
			pic_wrap.className = 'none'
		}
	}
	shud.onclick = function(){
		pic_wrap.className = 'none'
	}
//弹框 vcr
	var pv_vcr= document.getElementById("pv-vcr");
	var vcr1= document.getElementById("vcr1");
	var shud1 = document.getElementById("shod1")
	vcr1.onclick = function(){
		pv_vcr.className = ''
	}
	shud1.onclick = function(){
		pv_vcr.className = 'none-vcr1'
	}
}
//轮播图
   function scroll(){
   $(".slider-wrap ul").animate({"margin-left":"-474"},500,function(){
   $(".slider-wrap ul li:eq(0)").appendTo($(".slider-wrap ul"))
   $(".slider-wrap ul").css({"margin-left":"0"})
 	})
 }
setInterval(scroll,3000);

/*
function myimage(){
				Element=document.getElementById("myimag")
				
				if(Element.src.match("name-5")){
					Element.src="../img/qec-3.jpg"
				}
				else{
					Element.src="../img/name-5.jpg"	
				}
			}
//*/
//导航
//window.onload = function(){
// var tab_t = document.getElementById("tab_t");
// var tab_t_li = tab_t.getElementsByTagName("li");
// var tab_c = document.getElementById("tab_c");
// var tab_c_li = tab_c.getElementsByTagName("div");
// var len = tab_t_li.length;
// var i=0;
// for(i=0; i<len; i++){
//tab_t_li[i].index = i;
//tab_t_li[i].onclick = function(){
// for(i=0; i<len; i++){
//  tab_t_li[i].className = '';
//  tab_c_li[i].className = 'hide';
// }
// tab_t_li[this.index].className = 'act';
// tab_c_li[this.index].className = '';
//}
// }
//}