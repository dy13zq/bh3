setInterval(function(){
	var s=$(window).scrollTop();
	if (s<=400) {
		$("#flow-wrap>li:eq(2)").css("background","rgba(255,255,255,0.25)");
		$("#flow-wrap>li:eq(2)").css("color","black");
			$("#flow-wrap>li:eq(3)").css("background","rgba(0,0,0,0.25)");
		$("#flow-wrap>li:eq(3)").css("color","white");
	}else if(s>400&&s<1100){
			$("#flow-wrap>li:eq(2)").css("background","rgba(0,0,0,0.25)");
		$("#flow-wrap>li:eq(2)").css("color","white");
			$("#flow-wrap>li:eq(3)").css("background","rgba(255,255,255,0.25)");
		$("#flow-wrap>li:eq(3)").css("color","black");
			$("#flow-wrap>li:eq(4)").css("background","rgba(0,0,0,0.25)");
		$("#flow-wrap>li:eq(4)").css("color","white");
	}else{
			$("#flow-wrap>li:eq(3)").css("background","rgba(0,0,0,0.25)");
		$("#flow-wrap>li:eq(3)").css("color","white");
			$("#flow-wrap>li:eq(4)").css("background","rgba(255,255,255,0.25)");
		$("#flow-wrap>li:eq(4)").css("color","black");
	}
})
