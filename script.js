$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $(".scrolling").each(function() {
      const event = $(this).data("event");
      if (isScrolledIntoView(this) === true) {
        if (event === "bounceIn") {
          $(this).addClass("animated bounceIn");
        } else if (event === "fadeInUp") {
          $(this).addClass("animated fadeInUp");
        } else if (event === "fadeInRight") {
          $(this).addClass("animated fadeInRight");
        } else if (event === "fadeInRightBig") {
          $(this).addClass("animated fadeInRightBig");
        } else if (event === "slideInUp") {
          $(this).addClass("animated slideInUp");
        }
      }
    });
  });
});
