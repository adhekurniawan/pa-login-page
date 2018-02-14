
      //smooth scroll
      $(document).ready(function () {
        $(document).on("scroll", onScroll);

        $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");

          $('a').each(function () {
            $(this).removeClass('active');
          })
          $(this).addClass('active');

          var target = this.hash,
          menu = target;
          $target = $(target);
          $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
          }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          });
        });
      });

      function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.list-bar li').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("li"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.list-bar ul li a').removeClass("active");
            currLink.addClass("active");
          }
          else{
            currLink.removeClass("active");
          }
        });
      }