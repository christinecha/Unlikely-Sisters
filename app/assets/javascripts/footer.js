$(document).ready(function(){

  var footerPos = $(window).height() - $('.footer').height();

  if ($('body').height() < $(window).height()){
    $('.footer').css('top', footerPos);
    console.log($('body').height());
    console.log($(window).height());
  } else {
    $('.footer').css('top', '');
    console.log($('body').height());
    console.log($(window).height());
  };

  // var resizeId;
  // $(window).resize(function() {
  //     clearTimeout(resizeId);
  //     resizeId = setTimeout(doneResizing, 300);
  // });


});
