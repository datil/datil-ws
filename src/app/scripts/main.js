(function() {
  $(document).ready(function() {
    $(window).scroll(function(e) {
      if ($(window).scrollTop() > 90) {
        $(".home").addClass("is-scrolled");
      } else {
        $(".home").removeClass("is-scrolled");
      }
    });
  });
}).call(this);