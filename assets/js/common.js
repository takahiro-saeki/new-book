import rain from './raindrops';

$(function() {
  let myD = new Date();
  let thisYear = myD.getFullYear()
  $('.copyright').find('span').append(thisYear);

  $('.first').raindrops({color:'#fff', waveHeight:150, canvasHeight: 50});
})
