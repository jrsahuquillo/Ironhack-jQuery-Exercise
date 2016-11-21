$(document).ready(function(){
  var phrases = [
    'I like pie.',
    'Im tired.',
    'Im in Ironhack.',
  ];
  $('.phrases').html('<p>Click Refresh Button</p>');
  $('button').on('click', function(){
      $('.phrases').html(phrases[Math.floor(Math.random()*(phrases.length))]);
  });


  $('.input-text').keypress(function(event){
    // event.preventDefault();
    var newPhrase = $('.input-text').val();
    if (event.which == 13) {
      phrases.push(newPhrase);
    }
    $('.phrases').html(newPhrase);
  });

});
