$(document).ready(function(){

	$("footer .container .testJqueryV2 a").append("<em></em>");
	
	$("footer .container .testJqueryV2 a").hover(function() {
		$(this).find("em").stop(true, true).animate({opacity: "show", top: "-75"}, "slow");
		var hoverText = $(this).attr("title");
	    $(this).find("em").text(hoverText);
	}, function() {
		$(this).find("em").stop(true, true).animate({opacity: "hide", top: "-85"}, "fast");
	});


});
