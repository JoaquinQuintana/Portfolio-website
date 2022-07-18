  setTimeout(() => {
    const box = document.getElementById('spin');
    // removes element from DOM
    box.style.display = 'none';// hides element (still takes up space on page)
    //deblurr all elements on page
    document.querySelectorAll("body :not(#spin)")
  .forEach(element => element.style.filter = "blur(0)");

  }, 3000); // time in milliseconds

//credit for getRandomColor() goes to Anatoliy on stack overflow https://stackoverflow.com/questions/1484506/random-color-generator
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /* randomly assign color to letters in span */
  $("span.name").mouseover(function() {
    $(this).css("color",getRandomColor())
    $(this).css("font-size","10vw")
  });


/*   $("span.name").mouseout(function() {
    $(this).css("color","white")
    $(this).css("font-size","5vw")
  }); */

/* fade in objects */
$(".intro").hide().fadeIn(6000)
$(".gradient-list").hide().fadeIn(3000 )