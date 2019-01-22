$(document).ready(function(){
						   
	$(".container .delete").click(function(){
		$(this).parents(".container").animate({ opacity: 'hide' }, "slow");
	});
});