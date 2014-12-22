$(document).ready ->
  $(".navbar-lower").affix offset:
    top: $("#header").outerHeight() + $("#carousel-datil").outerHeight()

  return