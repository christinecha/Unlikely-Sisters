$(document).ready(function(){

  var tipNumber = 1;

  $('.necklaceNamer').hover(function(){
    var position = $(this).offset();
    $('.labels--name').show();
    $('.labels--name').css('margin-left', position.left);
    $('.labels--name').css('margin-top', position.top + 3);
  }, function(){
    $('.labels--name').hide();
  });

  $('.strandPicker').hover(function(){
    var position = $(this).offset();
    $('.labels--strand').show();
    $('.labels--strand').css('margin-left', position.left);
    $('.labels--strand').css('margin-top', position.top + 3);
  }, function(){
    $('.labels--strand').hide();
  });

  $('.lengthPicker').hover(function(){
    var position = $(this).offset();
    $('.labels--length').show();
    $('.labels--length').css('margin-left', position.left);
    $('.labels--length').css('margin-top', position.top + 3);
  }, function(){
    $('.labels--length').hide();
  });

  $('.quantity').hover(function(){
    var position = $(this).offset();
    $('.labels--quantity').show();
    $('.labels--quantity').css('margin-left', position.left);
    $('.labels--quantity').css('margin-top', position.top + 3);
  }, function(){
    $('.labels--quantity').hide();
  });

  $('.priceDisplay').hover(function(){
    var position = $(this).offset();
    $('.labels--price').show();
    $('.labels--price').css('margin-left', position.left);
    $('.labels--price').css('margin-top', position.top + 3);
  }, function(){
    $('.labels--price').hide();
  });




  var resizeId;
  $(window).resize(function() {
      clearTimeout(resizeId);
      resizeId = setTimeout(doneResizing, 300);
  });

  function doneResizing(){
  };

  function nextTip(){
    tipNumber+= 1;
  }





});
