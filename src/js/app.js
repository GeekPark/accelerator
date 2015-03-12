$(function() {
  if(!GeekPark.isPage('home')) {
    return;
  }

  var mobileW = 768,
      pageW   = $(document).width(),
      $body   = $('body'),
      $pcRoot = $('#pc-root'),
      $mobileRoot = $('#mobile-root');

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

      // $.fn.fullpage.moveTo(10);
    });
  }



});// jQuery read end
