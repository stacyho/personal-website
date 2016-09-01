$(document).ready(function(){
  $("#arrow-down").on('click', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(window).height()
    }, 750);
  });
});