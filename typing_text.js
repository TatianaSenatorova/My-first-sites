'use strict';

if ($(".text-slider").length == 1) {
  var typed_strings = $(".promo__subtitle_typing").text();
  var typed = new Typed(".text-slider", {
      strings: typed_strings.split(", "),
      typeSpeed: 60,
      loop: true,
      backDelay: 5000,
      backSpeed: 60,
  });
}


