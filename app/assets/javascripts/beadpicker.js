$(document).ready(function(){

  // SETTING THE PRICE
  var calculatePrice = function(){
    var totalprice = 0;
    var strandprice = 8;
    for (var i = 1; i <= 9; i++ ){
      totalprice+= parseInt(beads[i].size) + 1;
    };
    totalprice+= strandprice;
    $('#product_price').val(totalprice);
  };

  $("#product_price").prop("readonly", true);
  calculatePrice();

  // CHOOSING BEADS
  var beadShape = 'square';
  var beadPattern = 'solid';
  var beadSize = 2;
  var beadNumber = '1';
  var beadImageId = '#bead' + beadNumber;
  var beadInputId = '#product_bead' + beadNumber;

  $('.bead').click(function(){
    var beadPosition = $(this).offset();
    $('.beadpicker').css('margin-left', (beadPosition.left - 50) + 'px');
    $('.beadpicker').show();
    beadNumber = $(this).attr('id').slice(-1);
    beadImageId = '#bead' + beadNumber;
    beadInputId = '#product_bead' + beadNumber;
    $('.shapePicker').val(beads[beadNumber].shape);
    $('.patternPicker').val(beads[beadNumber].pattern);
    $('.sizePicker').val(beads[beadNumber].size);
    $('.selectedBead').html('Bead ' + beadNumber);
  });

  $('.shapePicker').change(function(){
    beadShape = $(this).val();
    console.log('beadShape is ' + beadShape);
    beads[beadNumber].shape = beadShape;
    beadPattern = beads[beadNumber].pattern;
    beadSize = beads[beadNumber].size;
    beadRequest();
  });

  $('.patternPicker').change(function(){
    beadPattern = $(this).val();
    console.log('beadPattern is ' + beadPattern);
    beads[beadNumber].pattern = beadPattern;
    beadShape = beads[beadNumber].shape;
    beadSize = beads[beadNumber].size;
    beadRequest();
  });

  $('.sizePicker').change(function(){
    beadSize = $(this).val();
    console.log('beadSize is ' + beadSize);
    beads[beadNumber].size = beadSize;
    beadShape = beads[beadNumber].shape;
    beadPattern = beads[beadNumber].pattern;
    beadRequest();
  });

  $('.removeBead').click(function(){
    $(beadImageId).hide();
    $(beadInputId).val('removed');
    beads[beadNumber].size = 0;
    $('.beadGraveyard').append('<button class="addBead" value=' + beadNumber + '>Add back Bead ' + beadNumber + '</button>');
    $('.beadpicker').hide();
    beadRequest();
  });

  $('.beadGraveyard').on('click', '.addBead', function(){
    console.log('working');
    beadNumber = $(this).val();
    $(this).remove();
    beadImageId = '#bead' + beadNumber;
    beadInputId = '#product_bead' + beadNumber;
    beads[beadNumber].size = 2;
    $(beadImageId).show();
    $('.beadpicker').show();
    beadRequest();
  });

  var beadRequest = function(){
    beadShape = beads[beadNumber].shape;
    beadPattern = beads[beadNumber].pattern;
    beadSize = beads[beadNumber].size;
    var beadRequest = beadShape + '_' + 'white' + '_' + beadPattern;
    var beadRequestFile = '/assets/editor/beads/' + beadRequest + '.png';
    console.log(beadRequestFile)
    $(beadImageId).attr('src', beadRequestFile);
    if (beadSize == 3){
      $(beadImageId).css('height', 100);
    } else if (beadSize == 2){
      $(beadImageId).css('height', 80);
    } else if (beadSize == 1){
      $(beadImageId).css('height', 60);
    };
    $(beadInputId).val(beadRequest);
    calculatePrice();
  };

  // CHOOSING THE STRAND
    $('#product_strand').change(function(){
      if ($(this).val() === 'Black') {
        $('.necklace-view').css('background-image', 'url("/assets/editor/strand_brown.png")');
      } else if ($(this).val() === 'Black & White') {
        $('.necklace-view').css('background-image', 'url("/assets/editor/strand3.png")');
      } else {
      };
    });


});
