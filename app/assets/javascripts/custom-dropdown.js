$(document).ready(function(){

  $('.custom-dropdown .dropdown').hide();
  $('.dropdown').attr('data-opened', 'collapsed');

  $('.custom-dropdown .selector').click(function(){
    if ($(this).siblings('.dropdown').attr('data-opened') === 'collapsed') {
      $('.custom-dropdown').removeClass('focus');
      $('.custom-dropdown .dropdown').hide();
      $('.custom-dropdown .dropdown').attr('data-opened', 'collapsed');
      $(this).parent('.custom-dropdown').addClass('focus');
      $(this).siblings('.dropdown').show();
      $(this).siblings('.dropdown').width($(this).parent('.custom-dropdown').width());
      $(this).siblings('.dropdown').attr('data-opened', 'opened');
    } else {
      $(this).siblings('.dropdown').hide();
      $(this).siblings('.dropdown').attr('data-opened', 'collapsed');
    }
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
