$(document).ready(function(){

  $('#product_strand').change(function(){
    if ($(this).val() === 'Black') {
      $('.necklace-view').css('background-image', 'url("/assets/editor/strand_brown.png")');
    } else if ($(this).val() === 'Black & White') {
      $('.necklace-view').css('background-image', 'url("/assets/editor/strand3.png")');
    } else {
    };
  });

  var beadShape = 'square';
  var beadPattern = 'solid';

  $('#shapePicker').change(function(){
    beadShape = $(this).val();
    console.log('beadShape is ' + beadShape);
    beadRequest();
  });

  $('#patternPicker').change(function(){
    beadPattern = $(this).val();
    console.log('beadPattern is ' + beadPattern);
    beadRequest();
  });

  var beadRequest = function(){
    var beadRequest = beadShape + '_' + 'white' + '_' + beadPattern;
    var beadRequestFile = '/assets/editor/beads/' + beadRequest + '.png';
    console.log(beadRequestFile)
    $('#bead1').attr('src', beadRequestFile);
    $('#product_bead1').val(beadRequest);
    console.log($('#product_bead1').val());
  };


});
