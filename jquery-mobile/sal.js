// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
    $('#salir').tap(function(){
	   navigator.notification.salir(1);
     });
	 $('.nota').bind('touchstart' , function() {$ (this) .addClass('touchstart');
	 
	 	 },false);
});
});