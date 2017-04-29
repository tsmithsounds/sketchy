$(document).ready(function() {
  
  // Make Grid
  
  var lengthwidth = 16;
  
  function makegrid(lengthwidth) {
      for (i=0; i<=((lengthwidth * lengthwidth)-1); i++) {
      $(".container").append("<div class='pixel'></div>"); 
      } 
        $(".pixel").css("height", (700/lengthwidth));
        $(".pixel").css("width", (700/lengthwidth));
  }
  
  // Draw
  
  function draw() {
    $(".pixel").mouseenter(function() {
      $(this).addClass("pixel2");
    })
  }
  
  // Clear
  
  function clear() {
    $("#clearbutton").click(function() {
      $(".pixel").removeClass("pixel2");
    })
  }
  
makegrid(lengthwidth);

draw();
  
clear();

  // New Grid Resolution
  
    $("#resizebutton").click(function() {
      $(".pixel").removeClass("pixel2");
      newlengthwidth = prompt("Pick a number!");
        makegrid(newlengthwidth);
        draw();
    })
})

 