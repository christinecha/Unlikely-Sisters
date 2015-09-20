$(document).ready(function(){

  var footerPos = $(window).height() - $('.footer').height();

  if ($('body').height() < $(window).height()){
    $('.footer').css('top', footerPos);
  } else {
    $('.footer').css('top', '');
  };

  // var resizeId;
  // $(window).resize(function() {
  //     clearTimeout(resizeId);
  //     resizeId = setTimeout(doneResizing, 300);
  // });


});
