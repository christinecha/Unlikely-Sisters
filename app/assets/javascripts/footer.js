$(document).ready(function(){

  var footerPos = $(window).height() - $('.footer').height();
  var setfooterPos = function(){
    $('.footer').css('top', footerPos);
  };

  if ($('.content').height() < $(window).height()){
    setfooterPos();
  } else {
    $('.footer').css('top', '');
  };

  var resizeId;
  $(window).resize(function() {
      clearTimeout(resizeId);
      resizeId = setTimeout(doneResizing, 300);
  });


});
