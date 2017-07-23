

$( document ).ready(function() {
  $('.slider').click(function () {
    if($(this).hasClass('unchecked-slider')){
      $(this).addClass('checked-slider');
      $(this).removeClass('unchecked-slider');
    }
    else if($(this).hasClass('checked-slider')){
    $(this).addClass('unchecked-slider');
        $(this).removeClass('checked-slider');
    }
  });
});