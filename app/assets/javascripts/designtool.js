$(document).ready(function(){

  // SETTING THE PRICE
  var calculatePrice = function(){
    var totalprice = 0;
    var strandprice = 8 + length;
    for (var i = 1; i <= 9; i++ ){
      if (beads[i].removed == false){
        totalprice+= 3;
      } else {
      }
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
  var beadColor = 'white';
  var quantity = 1;
  var beadNumber = '5';
  var beadImageId = '#bead' + beadNumber;
  var beadInputId = '#product_bead' + beadNumber;

  $("#product_price").prop("readonly", true);
  calculatePrice();

  $('.bead').click(function(){
    var beadPosition = $(this).offset();
    $('.necklace-view').css('text-align', 'left');
    $('.beadSelector').css('color', 'black');
    $('.beadpicker').show();
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
    beadColor = beads[beadNumber].color;
    beadRequest();
  });

  $('.patternPicker .option').click(function(){
    beadPattern = $(this).text();
    console.log('beadPattern is ' + beadPattern);
    beads[beadNumber].pattern = beadPattern;
    beadShape = beads[beadNumber].shape;
    beadColor = beads[beadNumber].color;
    beadRequest();
  });

  $('.colorPicker .option').click(function(){
    beadColor = $(this).text();
    console.log('beadColor is ' + beadColor);
    beads[beadNumber].color = beadColor;
    beadShape = beads[beadNumber].shape;
    beadPattern = beads[beadNumber].pattern;
    beadRequest();
  });

  $('.removeBead').click(function(){
    $('.beadSelector').css('color', 'white');
    $('.beadpicker').hide();
    $('.custom-dropdown .dropdown').hide();
    $(beadImageId).hide();
    $(beadInputId).val('');
    beads[beadNumber].removed = true;
    $('.beadGraveyard').append(
      '<button class="addBead" value="' + beadNumber + '">'
      +
      '<image height="50px" src="/assets/editor/beads/' + beads[beadNumber].shape + '_' + beads[beadNumber].color + '_' + beads[beadNumber].pattern + '.png" >'
      +
      '<p>ADD ME BACK</p>'
      +
      '</button> '
    );
    calculatePrice();
  });

  $('.beadGraveyard').on('click', '.addBead', function(){
    beadNumber = $(this).val();
    $(this).remove();
    beads[beadNumber].removed = false;
    beadImageId = '#bead' + beadNumber;
    beadInputId = '#product_bead' + beadNumber;
    $(beadInputId).val(beads[beadNumber].shape + '_' + beads[beadNumber].color + '_' + beads[beadNumber].pattern);
    $(beadImageId).show();
    var beadPosition = $(this).offset();
    $('.beadSelector').css('color', 'white');
    beadRequest();
  });

  $('.quantity').change(function(){
    quantity = $(this).val();
    calculatePrice();
  });

  var beadRequest = function(){
    beadShape = beads[beadNumber].shape;
    beadPattern = beads[beadNumber].pattern;
    beadColor = beads[beadNumber].color;
    var beadRequest = beadShape + '_' + beadColor + '_' + beadPattern;
    var beadRequestFile = '/assets/editor/beads/' + beadRequest + '.png';
    $(beadImageId).attr('src', beadRequestFile);
    $(beadInputId).val(beadRequest);
    console.log($('#product_bead1').val());
    calculatePrice();
  };

  var strandRequest = function(){
    var strandRequestFile = 'url("/assets/editor/strands/' + strand + '.png")';
    $('.necklace-view').css('background-image', strandRequestFile);
  };


  //ON SUBMIT, ADD TO CART & TAKE ME THERE!
  $('.save-button').click(function() {
    var valuesToSubmit = $('#new_product').serialize();
    $.ajax({
      type: "POST",
      cache: false,
      url: '/products', //sumbits it to the given url of the form
      data: valuesToSubmit,
      dataType: "JSON" // you want a difference between normal and ajax-calls, and json is standard
    }).success(function(json){
      console.log(json);
      $('#order_item_product_id').val(json.id);
      $('#order_item_quantity').val(quantity);
      $('#new_order_item').submit();
      window.location = '/cart';
    });
  });



});
