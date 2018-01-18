$(function(){
	initBackground();

	function initBackground(){
    $('body').css("background", "linear-gradient(135deg, yellow, red, blue)");
	}
  
  $(window).resize(function(){
    initBackground();
    });
})