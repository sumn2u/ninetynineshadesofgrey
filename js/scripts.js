$(document).ready(function() {
  $('.greys-grid-screen').css('display', 'none');
  // user clicks button and the divs move
  $('#move-div').on('click', function() {
    $('.black, .white').addClass('animated').addClass('moved');
    setTimeout(function() {
      $('.black, .white').removeClass('animated').removeClass('moved');
    }, 1000);
    setTimeout(function() {
      nextScreen();
    }, 1000);
  });

  // greys-grid-screen
  function nextScreen() {
    $('h2').text("Get to know about colorful lives");
    $('.greys-grid-screen').css('display', 'block');
    $('.two-divs-screen').css('display', 'none');
    $('#move-div').css('display', 'none');
    $('#greyclip').css('display', 'block');
  }

  // grey buttons 
  for (let i = 0; i < greys.length; ++i) {
    $("#grey").append("\
    <div class='col-sm-4 col-md-1 ml-auto mr-auto'>\
      <a href='" + greys[i].href + "' id='greybutton'>\
        " + greys[i].name + "\
      </a>\
    </div>\
  ");
    $('#greybutton').css('background-color', greys[i][2]);
  };

  // show names on the buttons
  $("#greyclip").mouseenter(function() {
    $(".info", this).show();
  }).mouseleave(function() {
    $(".info", this).hide();
  });
  return false;
});







 









