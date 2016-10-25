$(document).ready(function(){
  var $form = $('#game_form');
  var $message_space = $('#message_space');
  var $board = $('#board');
  
  $form.on('submit', function(e){
    e.preventDefault();
    console.log(e.currentTarget.elements['game_type'].value)
  })
  
});