// document ready function
$(document).ready(function () {

  $('.owl-carousel, .gallery-center-slider').owlCarousel({
    stagePadding:0,
    loop:true,
    items:3,
    lazyLoad: true,
    autoplay: true,
    center: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
      700:{
      items:1,
      center:false,
      }
  }
});

$(".contain .prev").click(function(){
  $(".owl-prev").trigger("click");
});
$(".contain .next").click(function(){
  $(".owl-next").trigger("click");
});

$('.Items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
   prevArrow: false,
    nextArrow: false
});

});
