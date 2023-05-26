// document ready function
$(document).ready(function () {



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
  nextArrow: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
});

$('.Our-blog .contain').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
   prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
});

$('.collection-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
   prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
});

});
