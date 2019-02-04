$(function(){
  $('div.color').hover(function(){
    var classValue = $(this).attr('class');
    var classArray = classValue.split(' ');
    $('#text').css({'color': classArray[1]});
  });
  $('div.color').mouseout(function(){
    $('#text').css('color', 'black');
  });
});
