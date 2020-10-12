jQuery(document).ready(function(jQuery) {
     
      var scrolled = false;
      jQuery(window).scroll(function() {
        console.log(jQuery(window).scrollTop());
        if ((jQuery(window).scrollTop() >= 270) && (scrolled === false)) {
          jQuery('.l-logobar').hide();
          jQuery('.l-logobar').addClass('fixed');
          jQuery('.l-logobar').fadeIn();
          scrolled = true;
        }
        else if (jQuery(window).scrollTop() < 270) {
          scrolled = false;
          jQuery('.l-logobar').removeClass('fixed');
     
        }
      });