$(document).ready(function(){

  $('.custom-dropdown .dropdown').hide();

  $('.custom-dropdown .selector').click(function(){
    $('.custom-dropdown').removeClass('focus');
    $(this).parent('.custom-dropdown').addClass('focus');
    $('.custom-dropdown .dropdown').hide();
    $(this).siblings('.dropdown').show();
    $(this).siblings('.dropdown').width($(this).parent('.custom-dropdown').width());
  });

  $('.custom-dropdown .dropdown .option').click(function(){
    var selectedOption;
    $(this).parent('.dropdown').hide();
    $(this).parent().parent('.custom-dropdown').removeClass('focus');
    //update selector's text to new selection
    selectedOption = $(this).html();
    $(this).siblings('.option').removeClass('selected');
    $(this).addClass('selected');
    // $(this).parent('.dropdown').siblings('.selector').html(selectedOption);
  });





});
