$(document).ready(function(){

  // SETTING THE PRICE
  var calculatePrice = function(){
    var totalprice = 0;
    var strandprice = 8 + length;
    for (var i = 1; i <= 9; i++ ){
      totalprice+= parseInt(beads[i].size);
    };
    totalprice+= strandprice;
    totalprice*= quantity;
    $('#product_price').val(totalprice);
    $('.priceDisplay').val('TOTAL PRICE: $' + totalprice + '.00');
    console.log(totalprice);
  };

  // CHOOSING BEADS & STRANDS
  var strand = 'black & white';
  var length = 0;
  var beadShape = 'square';
  var beadPattern = 'solid';
  var beadSize = 3;
  var quantity = 1;
  var beadNumber = '5';
  var beadImageId = '#bead' + beadNumber;
  var beadInputId = '#product_bead' + beadNumber;

  $("#product_price").prop("readonly", true);
  calculatePrice();
  console.log(length);

  $('.bead').click(function(){
    var beadPosition = $(this).offset();
    $('.necklace-view').css('text-align', 'left');
    $('.beadSelector').show();
    $('.beadSelector').css('margin-left', (beadPosition.left + $(this).width()/2 - 7) + 'px');
    beadNumber = $(this).attr('id').slice(-1);
    beadImageId = '#bead' + beadNumber;
    beadInputId = '#product_bead' + beadNumber;
  });

  $('.strandPicker .option').click(function(){
    strand = $(this).text();
    console.log('strand is ' + strand);
    strandRequest();
  });

  $('.lengthPicker .option').click(function(){
    if ($(this).text() == '80cm'){
      length = 2;
    } else {
      length = 0;
    }
    calculatePrice();
  });

  $('.shapePicker .option').click(function(){
    beadShape = $(this).text();
    console.log('beadShape is ' + beadShape);
    beads[beadNumber].shape = beadShape;
    beadPattern = beads[beadNumber].pattern;
    beadSize = beads[beadNumber].size;
    beadRequest();
  });

  $('.patternPicker .option').click(function(){
    beadPattern = $(this).text();
    console.log('beadPattern is ' + beadPattern);
    beads[beadNumber].pattern = beadPattern;
    beadShape = beads[beadNumber].shape;
    beadSize = beads[beadNumber].size;
    beadRequest();
  });

  $('.sizePicker .option').click(function(){
    if ($(this).text() == 'small'){
      beadSize = 2;
    } else if ($(this).text() == 'large'){
      beadSize = 4;
    } else {
      beadSize = 3;
    }
    console.log('beadSize is ' + beadSize);
    beads[beadNumber].size = beadSize;
    beadShape = beads[beadNumber].shape;
    beadPattern = beads[beadNumber].pattern;
    beadRequest();
  });

  $('.removeBead').click(function(){
    $('.beadSelector').hide();
    $('.custom-dropdown .dropdown').hide();
    $(beadImageId).hide();
    $(beadInputId).val('removed');
    beads[beadNumber].size = 0;
    $('.beadGraveyard').append('<button class="addBead" value=' + beadNumber + '>Add back Bead ' + beadNumber + '</button>');
    beadRequest();
  });

  $('.beadGraveyard').on('click', '.addBead', function(){
    console.log('working');
    beadNumber = $(this).val();
    $(this).remove();
    beadImageId = '#bead' + beadNumber;
    beadInputId = '#product_bead' + beadNumber;
    beads[beadNumber].size = 3;
    $(beadImageId).show();
    beadRequest();
  });

  $('.quantity').change(function(){
    quantity = $(this).val();
    calculatePrice();
  });

  var beadRequest = function(){
    beadShape = beads[beadNumber].shape;
    beadPattern = beads[beadNumber].pattern;
    beadSize = beads[beadNumber].size;
    var beadRequest = beadShape + '_' + 'white' + '_' + beadPattern;
    var beadRequestFile = '/assets/editor/beads/' + beadRequest + '.png';
    console.log(beadRequestFile)
    $(beadImageId).attr('src', beadRequestFile);
    if (beadSize == 4){
      $(beadImageId).css('height', 100);
    } else if (beadSize == 3){
      $(beadImageId).css('height', 80);
    } else if (beadSize == 2){
      $(beadImageId).css('height', 60);
    };
    $(beadInputId).val(beadRequest);
    calculatePrice();
  };

  var strandRequest = function(){
    var strandRequestFile = 'url("/assets/editor/strands/' + strand + '.png")';
    $('.necklace-view').css('background-image', strandRequestFile);
  };


  //ON SUBMIT, ADD TO CART & TAKE ME THERE!
  $('#new_product').submit(function() {
    var valuesToSubmit = $(this).serialize();
    $.ajax({
        type: "POST",
        url: $(this).attr('action'), //sumbits it to the given url of the form
        data: valuesToSubmit,
        dataType: "JSON" // you want a difference between normal and ajax-calls, and json is standard
    }).success(function(json){
        console.log("success", json);
        $('#order_item_product_id').val(json.id);
        $('#order_item_quantity').val(quantity);
        $('#order_item_product_id').submit();
    });
  });



});
