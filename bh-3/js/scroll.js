window.onscroll = function () { 
 var t = document.documentElement.scrollTop || document.body.scrollTop;
 if (t > 0) { 
 $(".cbbfixed").css("bottom", "10px"); 
 } else { 
 $(".cbbfixed").css("bottom", "-85px"); 
 } 
}



//返回顶部按钮的点击操作：
//$("#cgotop").click(function(){ 
// $('body,html').animate({ scrollTop: 0 }, 100); 
// return false; 
//});
//补充：
//1、监听某个元素的滚动条事件
//$(selector).scroll(function(){.......});
// 
//2.获取滚动条滚动的距离
//$(selector).scrollTop();
//$(selector).scrollLefft();