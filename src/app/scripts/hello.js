(function() {
  $(document).ready(function() {
    $(".navbar-lower").affix({
      offset: {
        top: $("#header").outerHeight() + $("#carousel-datil").outerHeight()
      }
    });
  });

}).call(this);
