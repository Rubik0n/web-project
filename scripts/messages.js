$(document).ready(function(){
	
	//hide message_body after the first one
	$(".message_body").hide();


	//toggle message_body
	$(".message_head").click(function(){
		$(this).next(".message_body").slideToggle(500)
		return false;
	});

});
