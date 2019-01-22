$(document).ready(function(){



	$(".thumbs a").click(function(){
	
		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");
		
		$("#largeImg").attr({ src: largePath, alt: largeAlt });
		
		$("h4 em").html(" (" + largeAlt + ")"); return false;
	});
	
});
