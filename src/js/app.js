$(function() {
  if(!GeekPark.isPage('home')) {
    return;
  }

  var mobileW = 768,
      pageW   = $(document).width(),
      $body   = $('body'),
      $pcRoot = $('#pc-root'),
      $mobileRoot = $('#mobile-root');

  // PC js
  if(pageW > mobileW) {
    var templateURL = $pcRoot.data('url');
    GeekPark.loadTemplate(templateURL, function(data) {
      // Do something when template loaded
      $pcRoot.html(data);

      // fullpage
      $pcRoot.find('#fullpage').fullpage({
        navigation: true,
        onLeave: function(index, nextIndex, direction) {
          var nowPage = $pcRoot.find('.section').eq(index).data('name');
          $pcRoot.find('#fullpage').addClass(nowPage);
        }
      });

      // $.fn.fullpage.moveTo(7);

      pcJS();
    });
  }


  function pcJS () {
    // page animation delay
    $pcRoot.find('section.section .anim-item').each(function() {
      var order = $(this).data('order');
      $(this).css({
        "transition-delay": order + 's',
        "animation-delay": order + 's'
      });
    });


    $pcRoot.find('.shadow').each(function() {
      var $container = $(document.createElement('div'));
      $(this).before($container);
      $container.addClass('shadow-container');
      $(this).appendTo($container);
      $container.append('<div class="shadow-bg"></div>');
    });
  }

});// jQuery read end

