if(window.jQuery) {
  var $cell = jQuery('td.mapsearchOuterCell');
  var netIds = [];
  jQuery('td.mapsearchOuterCell').each((index, cell) => {netIds.push($(cell).children('a').data('netid'))});
  console.log(netIds.join('\n'))
}
