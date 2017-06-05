window.onload = function(){
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
}