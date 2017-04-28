

var $pixel = ("<div class='pixel'></div>");

$(document).ready(function() {
	for (i=0; i<=255; i++) {
  	$(".container").append($pixel);
  }
});

$(document).ready(function() {
	$(".pixel").mouseenter(function() {
		$(this).addClass("pixel2");
	});	
});

/*
$(document).ready(function() {
	$(".clearbutton").on("click", function() {
		$(".pixel").css("background-color", "white");
	});
});
*/

$(document).ready(function() {
	$(".clearbutton").click(function() {
		$(".pixel").removeClass("pixel2");
		$(".pixel").mouseenter(function() {
			$(this).addClass("pixel2");
		});
	});
});

