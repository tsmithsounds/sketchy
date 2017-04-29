

var $pixel = ("<div class='pixel'></div>");
var r = 16;
var newres = (r*r);


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


$(document).ready(function() {
	$("#clearbutton").click(function() {
		$(".pixel").removeClass("pixel2");
		$(".pixel").mouseenter(function() {
			$(this).addClass("pixel2");
		});
	});
});




	$("#resizebutton").click(function() {
		$(".pixel").removeClass("pixel2");
		r = prompt("Pick a number!");
			$(".pixel").css("height", (528/r));
			$(".pixel").css("width", (528/r));
		newres = (r*r);
		resolution();
	})	


function resolution() {
	for (i=0; i<=newres; i++) {
  	$(".container").append($pixel);
	}
}
		

	

		
		
		
		/*
		if (r<=100) {
				$(".pixel").css("height", Math.floor(528/r));
				$(".pixel").css("width", Math.floor(528/r));
				for (i=0; i<=((r * r)-1); i++) {
  					$(".container").append($pixel);
				}
			} else { 
				(r=100)
			}
				$(".pixel").css("height", Math.floor(528/r));
				$(".pixel").css("width", Math.floor(528/r));
				for (i=0; i<=((r * r)-1); i++) {
  					$(".container").append($pixel);
				}
		});
		
});

*/


