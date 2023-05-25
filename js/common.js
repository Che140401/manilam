// document ready function
$(document).ready(function () {

  $('.owl-carousel, .gallery-center-slider ').owlCarousel({
    stagePadding:0,
    loop:true,
    nav:true,
    items:3,
    lazyLoad: true,
    autoplay: true,
    center: true,
    // autoplaySpeed: 1000,
    // autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
});

// $('.gallery-center-slider').slick({
//   centerMode: true,
//   centerPadding: '100px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: false,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

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
