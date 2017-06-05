$(document).ready(function(){
//	alert($("#name-h1").text());
	//获取
//	$("#name-h1").remove("#name-h1");
	//删除
//	$("#name-h1").prepend("adjaldj");
	//添加
	
	//点击转换
	$(".nav-btn-right").click(function(){
		$("#name-h1").text("s");
		$(".name-span").text("sjd")

	})
	$(".nav-btn-left").click(function(){
		$("#name-h1").text("d");
	})
})
/*function changeImg(imgid){
    //初始化所有的图片

    $("img").each(function(i,n){
            $(this).attr("src",“0”+i+".png");
            if($(this).attr("id")==imgid){
                $(this).attr("src",“1”+i+".png");//修改点击的那张图
            }
      });
}*/