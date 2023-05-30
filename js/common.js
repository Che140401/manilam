// document ready function
$(document).ready(function () {

  $(document).on('click', '[data-tab]', function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var dataTab = $(this).attr('data-tab');
    $('#' + dataTab).siblings().removeClass("active");
    $('#' + dataTab).addClass('active');
    $('.' + dataTab).siblings().removeClass("active");
    $('.' + dataTab).addClass('active');
  })

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

  $(".bottom-contain .prev").click(function () {
    $(".slick-prev").trigger("click");
  });
  $(".bottom-contain .next").click(function () {
    $(".slick-next").trigger("click");
  });

  $(".first-slider-box .prev").click(function () {
    $(".speak-slider01 .slick-prev").trigger("click");
  });
  $(".first-slider-box .next").click(function () {
    $(".speak-slider01 .slick-next").trigger("click");
  });


  $(".menu-btn").click(function () {
    $(".mob-menubar").toggleClass("active");
    $(this).toggleClass("active");
  });



  $('.home-banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    prevArrow: false,
    nextArrow: false,
    dots: true,
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

  $('.speak-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    // prevArrow: true,
    // nextArrow: true,
    responsive: [
      {
        breakpoint: 1023,
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

  $('.speak-slider01').slick({
    rows: 2,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    // prevArrow: true,
    // nextArrow: true,
    responsive: [
      {
        breakpoint: 1023,
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



});
