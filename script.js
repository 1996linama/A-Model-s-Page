$(document).ready(function() {

  function inView(node) {
    const docTop = $(window).scrollTop();
    const docBottom = docTop + $(window).height();

    const nodeTop = $(node).offset().top;
    const nodeBottom = nodeTop + $(node).height();

    return nodeBottom <= docBottom && nodeTop >= docTop;
  }

  $(window).scroll(function() {
    $(".scrolling").each(function() {
      const event = $(this).data("event");
      if (inView(this) === true) {
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
