$(document).ready(function(){
  $('.content').hide();
  $('button').click(function(){
    alert("Are you ready to read Sherrie's resume?");
    $('.content').show('fast');
    $('button').hide();
  });
  });
