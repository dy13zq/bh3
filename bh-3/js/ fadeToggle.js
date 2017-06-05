
setInterval(function(){
	var ul=document.getElementById("fade");
	var li=ul.getElementsByTagName("li");
	var len=li.length;
var s=$(window).scrollTop();
	
	if (s==0) {
		$(li).fadeOut(1)
	}else if(s>300){
		$('#fade>li:eq(0)').fadeIn(200,function(){
			$('#fade>li:eq(1)').fadeIn(200,function(){
			$('#fade>li:eq(2)').fadeIn(200,function(){
			$('#fade>li:eq(3)').fadeIn(200,function(){
			$('#fade>li:eq(4)').fadeIn(200,function(){
			$('#fade>li:eq(5)').fadeIn(200,function(){
			$('#fade>li:eq(6)').fadeIn(200,function(){
			$('#fade>li:eq(7)').fadeIn(200,function(){
			$('#fade>li:eq(8)').fadeIn(200,function(){
			$('#fade>li:eq(9)').fadeIn(200,function(){
			$('#fade>li:eq(10)').fadeIn(200,function(){
			$('#fade>li:eq(11)').fadeIn(200,function(){
			$('#fade>li:eq(12)').fadeIn(200,function(){
			$('#fade>li:eq(13)').fadeIn(200,function(){
			$('#fade>li:eq(14)').fadeIn(200,function(){
			$('#fade>li:eq(15)').fadeIn(200,function(){
			
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
}
//	alert(s)
})
