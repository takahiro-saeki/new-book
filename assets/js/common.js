import rain from './raindrops';

$(function() {
  let myD = new Date();
  let thisYear = myD.getFullYear()
  $('.copyright').find('span').append(thisYear);

  $('.first').raindrops({color:'#e3f2fd', waveHeight:150, canvasHeight: 50});
  $('.second').raindrops({color:'#ec407a', waveHeight:150, canvasHeight: 50});
})
