var topLimit;
var bottomLimit = 0;
$(function () {

  // Mobile Menu toggle
  $("#toggle-collapsed-nav").on('click', function (event) {
    event.preventDefault();
    //$(".header-menu").toggle("slide", { direction: "left" }, 1000);
    //$(".header-menu").toggleClass("open");
    $(".header-menu").animate({
      width: '300px'
    }, 300).show().addClass("open");
    $(".header-overlay").addClass("open");
  });
  $('.close-mobile-nav-icon').on('click', function (event) {
    $(".header-menu").animate({
      width: '0px'
    }, 100).hide().removeClass("open");
    $(".header-overlay").removeClass("open");
  });
  var clicked = false;
  $(".dropdown-target").on('click', function (event) {
    $(this).toggleClass("open");
    $(this).attr('aria-expanded', function (i, attr) {
      return attr == 'true' ? 'false' : 'true'
    });
    $(this).parent().find("ul.dropdown").toggleClass('open');
    if (clicked == false) {
      clicked = true;
    } else {
      clicked = false;
    }
  });

  $(".dropdown-container").hover(function () {
    $(this).toggleClass('hover');
    if (clicked == false) {
      if ($(window).width() > 767) {
        $(this).children().toggleClass("open");
        $(this).children('button').attr('aria-expanded', function (i, attr) {
          return attr == 'true' ? 'false' : 'true'
        });
        var the_width = $(this).find("a").width();
        var child_width = $(this).find("ul").width();
        var width = parseInt((child_width - the_width) / 2);
        $(this).find("ul").css('left', -width);
      } else {
        $(this).find("ul").css('left', 0);
      }
    }
  });


  if ($('.back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('.back-to-top').addClass('show');
        } else {
          $('.back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

});

$(function () {



  // Wrap videos
  var $allVideos = $("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], object, embed"),
    $fluidEl = $("figure");
  $allVideos.each(function () {

    $(this).wrap("<div class='video-container'></div>");

  });


  // change url on select change on categories in header
  $('#category_select').on('change', function () {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
    return false;
  });


  /* search box display */
  $(".search-icon").click(function () {
    $(this).attr('aria-expanded', 'true');
    $(".search-box").slideToggle("slow", function () {
      $(".searchform input[name=s]").focus();
      $(".header-overlay").addClass("open search-open");
    });
  });

  /* search box close */
  $(".search-box .closer").click(function () {
    $(".search-box").slideToggle("slow", function () {
      $(".header-overlay").removeClass("open search-open");
    });

    $(".search-icon").attr('aria-expanded', 'false');
  });

  /* submit search form */
  $(".search-box input").keypress(function (event) {
    if (event.which == 13) {
      event.preventDefault();
      $(".search-box form").submit();
    }
  });

  /* signup close */
  $(".single .signup .close").click(function () {
    setCookie("signup", "closed", 1);
    $(".single .signup").hide();
  });

  /* welcome box close */
  $("#welcome .close").click(function () {
    $("#welcome").animate({
      right: '-450px'
    });
    setCookie("newVisitor", false, 30);
  });

  /* featured items carousel */
  if ($('.featured-carousel').length) {
    $('.featured-carousel').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      dots: true,
      speed: 300,
      arrows: false,
      adaptiveHeight: false,

      responsive: [{
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  /* sticky signup widget */

  if ($('.travel-carousel').length) {
    $('.travel-carousel').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: false,
      arrows: false,
      responsive: [{
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
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

  if ($('.featured-posts-container').length > 0) {
    bottomLimit = (document.body.scrollHeight / 5);
  }

  /* money2020 early access thank you page */
  $(".thank-you-close").click(function () {
    $(".thank-you-popup").hide();
    $(".page-template-money2020 .header-overlay").hide();
  });


});

window.onresize = function () {
  if (window.innerWidth >= 1024) {
    $(".header-menu").removeClass("open").width("auto");
  }
}


/* sticky signup widget */
$(window).scroll(function () {
  if ($(window).scrollTop() >= bottomLimit) {
    $("section.signup").addClass("fixed");
  } else {
    $("section.signup").removeClass("fixed");
  }
});

/* cookie code for welcome message */
$(function () {
  if (getCookie("newVisitor") == false) {
    $("#welcome").removeClass("hide");
    setCookie("newVisitor", false, 30);
    $("#welcome").slideUp(500)
      .delay(2000)
      .slideDown(500);
  }
  if (getCookie("signup") == "closed") {
    $(".single .signup").hide();
  }
});


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var exists = false;
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      var exists = true;
      return c.substring(name.length, c.length);
      break;
    }
  }
  return exists;
}

/*
$( "#sign-up-form" ).submit(function( event ) {
	event.preventDefault();
	
	var data = { "SubAction":"sub_add_update", "Email Address":$("#email").val(), "LID":"442", "MID":"100009636" };
	var posting = $.post("https://cl.s10.exct.net/subscribe.aspx",data,function switchVisible() { 
		console.log(data); 
		$("#sign-up-form").hide(); 
		$('.success').show();
		setCookie("signup", "closed", 365);
	}); 
	return true; 
});
*/