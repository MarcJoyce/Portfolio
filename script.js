$(function() {});

$(document).ready(function() {
  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
  $("#resize ul li a").click(function() {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
  $(".close-btn").click(function() {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });


      $(".animate-fadeInUp").each(function (i) {
            var bottom_of_element =
                  $(this).position().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                  $(this).animate({ opacity: "1" }, 100);
            }
      });

        
  $(window).scroll(function() {
        $(".animate-fadeInUp").each(function (i) {
              var bottom_of_element =
                    $(this).position().top + $(this).outerHeight() / 3;
              var bottom_of_window = $(window).scrollTop() + $(window).height();

              if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ opacity: "1" }, 1000);
              }
        });
  });
});