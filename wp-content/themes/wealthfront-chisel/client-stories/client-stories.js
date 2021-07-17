$(function () {
  $(".top-five li").click(function () {
    if ($(this).hasClass("open")) {
      $(this).children(".hidden").slideUp();
      $(this).removeClass("open");
    } else {
      $(".top-five li .hidden").slideUp();
      $(this).addClass("open");
      $(this).children(".hidden").slideDown("slow", function () {

      });
    }
  });
  if ($('.two') && $('.two').length) {
    $('.two').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      variableWidth: true,
      arrows: false,
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false
          }
        }
      ]
    });
  }

  if ($('.featured-images') && $('.featured-images').length) {
    $('.featured-images').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: false,
      arrows: false,
      responsive: [{
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
});