$(window).ready(function(){
	$('#pic-callback').fadeOut(0)
	$('#content-callback').fadeOut(0)
	$('#name-callback').fadeOut(0,function(){
		$('#name-callback').fadeIn(1000,function(){
		$('#content-callback').slideDown(1000,function(){
			$('#pic-callback').slideDown(5000)
		});
		});
	})
//	alert('s')
})