$(document).ready(function() {
  
  var lengthwidth = 16;
  makegrid(lengthwidth);
  drawblack();
  
  $("#clearbutton").click(function() {
    clear();
  })
  
  $("#resizebutton").click(function() {
    var newlengthwidth = prompt("Pick a number 1 to 100!");
    clear();
    makegrid(newlengthwidth);
    drawblack();
  })
  
  $("#drawconfetti").click(function() {
    drawconfetti();
  })
  
  $("#drawblack").click(function() {
    drawblack(); 
  })
  
  $("#eraser").click(function() {
    erase();
  })

  // Grid
  
  function makegrid(lengthwidth) {
      for (i=0; i<=((lengthwidth * lengthwidth)-1); i++) {
      $(".container").append("<div class='pixel'></div>"); 
      } 
        $(".pixel").css("height", (700/lengthwidth));
        $(".pixel").css("width", (700/lengthwidth));
  }
    
  // Draw
  
  function drawblack() {
    $(".pixel").mouseenter(function() {
      $(this).css("background-color", "#333333");
    })
  }

  // Draw Confetti

  function drawconfetti() {
    $(".pixel").mouseenter(function() {      
      var random = 'rgb(' + (Math.floor((Math.random()*256)+1)) + ',' + (Math.floor((Math.random()*256)+1)) + ',' + (Math.floor((Math.random()*256)+1)) + ')';
      console.log(random);
      $(this).css("background-color", random);
    })
  }
  
  // Eraser
  
  function erase() {
    $(".pixel").mouseenter(function() {
      $(this).css("background-color", "white");
    })
  }
  
  // Clear
  
  function clear() {
      $(".pixel").css("background-color", "white");
  }
  
})





