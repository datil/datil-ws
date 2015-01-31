(function() {
  window.odometerOptions = {
    // animation: 'count'
  };
  var navScrollSpy = function () {
    if ($(".home").length) {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 60) {
        $(".home").addClass("is-scrolled");
        $(".home header > .navbar").removeClass("navbar-inverse");
      } else {
        $(".home").removeClass("is-scrolled");
        $(".home header > .navbar").addClass("navbar-inverse");
      }
      devicesFadeIn(scrollTop);
    } else {
      $("header > .navbar").removeClass("navbar-inverse");
    }
  }

  var devicesFadeIn = function (scrollTop) {
    if (scrollTop >= ($("#devices").offset()["top"] - $(window).height() + 200) &&
        $(".devices > .device-img:first-child img").css("opacity") != "1") {
      $(".devices > .device-img:first-child").addClass("in");
      setTimeout(function() {
        $("#devices").css({"overflowY": "visible"});
      }, 1000);
    }
  }

  var initSmoothScroll = function () {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000, 'swing');
          return false;
        }
      }
    });
  }
  var amount = 8103881;
  var updateCounter = function() {
    $(".odometer").html(amount);
    setInterval(function() {
      amount += Math.round((Math.random()* 10), 2);
      $(".odometer").html(amount);
    }, Math.random() * 8000);
  }

  $(document).ready(function() {
    $("#intro-datil").css({"height": $(window).height()});
    navScrollSpy();
    initSmoothScroll();
    updateCounter();

    $(window).scroll(function(e) {
      navScrollSpy();
    });
  });
}).call(this);