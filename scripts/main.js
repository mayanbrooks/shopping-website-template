$('.carousel').carousel();



$('.carousel.carousel-slider').carousel({fullWidth: true});

// Next slide

$('.carousel').click(function(){
  $('.carousel').carousel('next'); // Move next n times.
});
