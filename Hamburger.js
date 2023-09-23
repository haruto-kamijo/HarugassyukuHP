// JavaScript Document
if(document.getElementById("JsHamburger")){
	document.getElementById("JsHamburger").addEventListener('click', function () {
		document.getElementById("JsHamburger").classList.toggle("Active");
		document.getElementById("JsNav").classList.toggle("Show");
	},false);
}