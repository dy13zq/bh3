window.onload=function(){
	var i=0
var employees = [
{ "firstName":"Bill" , "lastName":"Gates" },
{ "firstName":"George" , "lastName":"Bush" },
{ "firstName":"Thomas" , "lastName": "Carter" }
];
	employees[i].firstName="Jobs";
	document.getElementById("fname").innerHTML=employees[i].lastName;
//	document.getElementById("p").innerHTML=employees[i].lastName;
	var as = document.getElementsByTagName("div")
//	alert()
}
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