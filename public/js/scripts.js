$(document).ready(function() {
  $('.greys-grid-screen').css('display', 'none');
  $('h1').css('display', 'none');

  // user clicks button and the div moves
  $('#move-div').on('click', function() {
    $('.black, .white').addClass('animated').addClass('moved');
    setTimeout(function() {
      $('.black, .white').removeClass('animated').removeClass('moved');
    }, 1000);
    setTimeout(function() {
      nextScreen();
    }, 1000);
  })

  // greys-grid-screen
  function nextScreen() {
    $('body').css('background-color', '#fff');
    $('body').css('background-image', '-webkit-linear-gradient(30deg, #fff 50%, #000 50%)')
    $('h1').css('display', 'block');
    $('.greys-grid-screen').css('display', 'block');
    $('#two-divs-screen').css('display', 'none');
    $('#move-div').css('display', 'none');
  }

  for (let i = 0; i < greys.length; ++i) {
    $("#grey").append(`<div class='col-lg-1 col-md-2 col-sm 3 col-xs-4 ml-auto mr-auto'><a href='${greys[i].href}' class='greybutton' style='background:${greys[i].backgroundColor}'><span class='name'>${greys[i].name}</span></a></div>`);
  }; 

  /*for (let i = 0; i < greys.length; ++i) {
    let greyButton = document.querySelectorAll('[greybutton=]')[0];
    greyButton.style.setProperty('background-color', greys[i].backgroundColor);
  }; */

  return false;
});








 









